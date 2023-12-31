import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from 'src/infastructure/dtos/paginationQuery.dto';
import { Mapper } from 'src/infastructure/helpers/mapper.helper';
import { Repository, Like, Between } from 'typeorm';
import { Company } from '../company/entities/company.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';
import { EventsPaginationQueryDto } from './dto/events-pagination.dto';
import { UserRole } from 'src/infastructure/enums/roles.enum';
import { EventsStatisticsQueryDto } from './dto/stats-events-pagination.dto';
import { EventStatisticsSegmentModel } from 'src/models/event/events-stats.response.model';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async create(companyId: string, createEventDto: CreateEventDto) {
    const company = await this.companyRepository.findOne(companyId);

    const savedEvent = await this.eventRepository.save({
      ...createEventDto,
      company,
    });
    console.log(savedEvent);
    return Mapper.mapEventEntityToEventCreatedResponseModel(savedEvent);
  }

  async findAll(
    companyId: string,
    role: UserRole,
    query: EventsPaginationQueryDto,
  ) {
    let whereQuery = {};
    if (role === UserRole.COMPANY_ADMIN) {
      whereQuery = {
        company: { id: companyId },
      };
    } else if (role === UserRole.ADMIN && query.companyName !== undefined) {
      whereQuery = {
        company: { name: Like(`%${query.companyName}%`) },
      };
    }

    if (query.eventName !== undefined) {
      whereQuery = { title: Like(`%${query.eventName}%`), ...whereQuery };
    }

    if (typeof query.active !== 'undefined') {
      whereQuery = { active: query.active, ...whereQuery };
    }

    const [result, total] = await this.eventRepository.findAndCount({
      relations: ['location', 'company'],
      where: { ...whereQuery },
      take: query.pageSize || 25, //? DefaultValues.PAGINATION_LIMIT,
      skip: query.pageNumber * query.pageSize || 0, //? DefaultValues.PAGINATION_OFFSET,
    });

    const mappedEvents = result.map((event) =>
      Mapper.mapEventEntityToEventResponseModel(event),
    );
    return { items: mappedEvents, total };
  }

  async findOne(id: string) {
    const event = await this.eventRepository.findOne(id);

    return Mapper.mapEventEntityToEventResponseModel(event);
  }

  async findOneStatistics(id: string, query: EventsStatisticsQueryDto) {
    // const searchDatesPairs = getDatesPerInterval(query.startDate, query.endDate, 30)
    const searchDatesPairs = this.getDatesPerInterval(
      new Date(query.startDate),
      new Date(query.endDate),
      // 30,
      60 * 60 * 24,
    );

    const { price } = await this.eventRepository.findOne(id);

    const segments: EventStatisticsSegmentModel[] = [];
    let index = 0;
    for await (const searchDate of searchDatesPairs) {
      try {
        if (index > 0) {
          let start = searchDatesPairs[index - 1].toISOString();
          let end = searchDate.toISOString();
          start = start.substring(0, start.length - 1);
          end = end.substring(0, end.length - 1);

          const event = await this.eventRepository
            .createQueryBuilder('events')
            .select('event_orders.id')
            .select('event_orders.ammount')
            .innerJoin('events.orders', 'event_orders')
            .where('event_orders.createdAt BETWEEN :start AND :end', {
              start,
              end,
            })
            .getOne();
          segments.push(
            Mapper.mapEventToEventStatisticsSegmentModel(
              event,
              start,
              end,
              price,
            ),
          );
        }
      } catch (err) {
        console.error(err);
        throw err;
      }
      index++;
    }

    return Mapper.mapStatisticsSegmentsToEventStatisticsModel(segments);
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    const eventToBeUpdated = await this.eventRepository.findOne(id);
    const updatedLocation = {
      ...eventToBeUpdated.location,
      ...updateEventDto.location,
    };

    const updatedEvent = await this.eventRepository.save({
      ...eventToBeUpdated,
      ...updateEventDto,
      location: updatedLocation,
    });

    return Mapper.mapEventEntityToEventResponseModel(updatedEvent);
  }

  async remove(id: string) {
    return await this.eventRepository.delete(id);
  }

  private getDatesPerInterval = (
    start: Date,
    end: Date,
    interval: number,
  ): Date[] => {
    const res = [];
    const temp = start;
    while (temp < end) {
      temp.setSeconds(temp.getSeconds() + interval);
      res.push(new Date(temp));
    }
    return res;
  };
}
