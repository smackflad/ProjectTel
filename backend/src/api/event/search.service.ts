import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from 'src/infastructure/dtos/paginationQuery.dto';
import { Mapper } from 'src/infastructure/helpers/mapper.helper';
import {
  Repository,
  Like,
  Between,
  MoreThanOrEqual,
  LessThanOrEqual,
  In,
  Any,
} from 'typeorm';
import { Company } from '../company/entities/company.entity';
import { Event } from './entities/event.entity';
import { SearchEventDto } from './dto/search-event.dto';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async findAll(query: PaginationQueryDto, search: SearchEventDto) {
    const [result, total] = await this.eventRepository.findAndCount({
      relations: ['location', 'company'],
      where: this.PopulateWhereQueryFromSearchRequest(search),
      take: query.pageSize || 25, //? DefaultValues.PAGINATION_LIMIT,
      skip: query.pageNumber * query.pageSize || 0, //? DefaultValues.PAGINATION_OFFSET,
    });
    const mappedEvents = result.map((event) =>
      Mapper.mapEventEntityToEventResponseModel(event),
    );
    return { items: mappedEvents, total };
  }

  private PopulateWhereQueryFromSearchRequest(search: SearchEventDto) {
    let whereQuery = {};
    if (search.title) {
      whereQuery = { title: Like(`%${search.title}%`) };
    }
    if (search.description) {
      whereQuery = {
        ...whereQuery,
        description: Like(`%${search.description}%`),
      };
    }
    if (search.eventCategory !== undefined) {
      whereQuery = {
        ...whereQuery,
        eventCategory: In(search.eventCategory),
      };
    }
    if (search.ageCategory !== undefined) {
      whereQuery = {
        ageCategory: In(search.ageCategory),
      };
    }
    if (search.startDate && search.endDate) {
      whereQuery = {
        ...whereQuery,
        eventDate: Between(search.startDate, search.endDate),
      };
    } else if (search.endDate) {
      whereQuery = {
        ...whereQuery,
        eventDate: LessThanOrEqual(search.endDate),
      };
    } else if (search.startDate) {
      whereQuery = {
        ...whereQuery,
        eventDate: MoreThanOrEqual(search.startDate),
      };
    }
    console.log(whereQuery);
    return { ...whereQuery, active: true };
  }
}
