import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from 'src/infastructure/dtos/paginationQuery.dto';
import { Mapper } from 'src/infastructure/helpers/mapper.helper';
import { Repository, Like } from 'typeorm';
import { Company } from '../company/entities/company.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';
import { EventsPaginationQueryDto } from './dto/events-pagination.dto';
import { UserRole } from 'src/infastructure/enums/roles.enum';
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
    // let whereQuery = {};
    // if (role === UserRole.COMPANY_ADMIN) {
    //   whereQuery = {
    //     company: { id: companyId },
    //   };
    // } else if (role === UserRole.ADMIN && query.companyName !== undefined) {
    //   whereQuery = {
    //     company: { name: Like(`%${query.companyName}%`) },
    //   };
    // }
    // if (query.eventName !== undefined) {
    //   whereQuery = { title: Like(`%${query.eventName}%`), ...whereQuery };
    // }
    // const [result, total] = await this.eventRepository.findAndCount({
    //   relations: ['location', 'company'],
    //   where: whereQuery,
    //   take: query.pageSize || 25, //? DefaultValues.PAGINATION_LIMIT,
    //   skip: query.pageNumber * query.pageSize || 0, //? DefaultValues.PAGINATION_OFFSET,
    // });
    // const mappedEvents = result.map((event) =>
    //   Mapper.mapEventEntityToEventResponseModel(event),
    // );
    // return { items: mappedEvents, total };
  }
}
