import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from 'src/infastructure/dtos/paginationQuery.dto';
import { Mapper } from 'src/infastructure/helpers/mapper.helper';
import { Repository } from 'typeorm';
import { Company } from '../company/entities/company.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async create(createEventDto: CreateEventDto) {
    const { companyId, ...eventToBeCreated } = createEventDto;

    const company = await this.companyRepository.findOne(companyId);

    const savedEvent = await this.eventRepository.save({
      ...eventToBeCreated,
      company,
    });

    return Mapper.mapEventEntityToEventCreatedResponseModel(savedEvent);
  }

  async findAll(query: PaginationQueryDto) {
    const [result, total] = await this.eventRepository.findAndCount({
      relations: ['location'],
      take: query.pageSize || 25, //? DefaultValues.PAGINATION_LIMIT,
      skip: query.pageNumber * query.pageSize || 0, //? DefaultValues.PAGINATION_OFFSET,
    });

    const mappedEvents = result.map((event) =>
      Mapper.mapEventEntityToEventResponseModel(event),
    );
    return { mappedCompanies: mappedEvents, total };
  }

  async findOne(id: string) {
    const event = await this.eventRepository.findOne(id);

    return Mapper.mapEventEntityToEventResponseModel(event);
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    // await this.eventRepository.update(id, updateEventDto);
    // return this.findOne(id);

    const eventToBeUpdated = await this.eventRepository.findOne(id);
    const updatedLocation = {
      ...eventToBeUpdated.location,
      ...updateEventDto.location,
    };
    console.log(eventToBeUpdated);
    console.log({ ...eventToBeUpdated, ...updateEventDto });
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
}
