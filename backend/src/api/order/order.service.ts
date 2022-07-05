import { Event } from 'src/api/event/entities/event.entity';
import { Order } from 'src/api/order/entities/order.entity';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Parent } from '../parent/entities/parent.entity';
import { PaginationQueryDto } from 'src/infastructure/dtos/paginationQuery.dto';
import { ParentService } from 'src/api/parent/parent.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(Parent)
    private readonly parentRepository: Repository<Parent>,
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
    private parentService: ParentService,
  ) {}

  async create(parentId: string, createOrderDto: CreateOrderDto) {
    const parent = await this.parentRepository.findOne(parentId);
    let event = await this.eventRepository.findOne(createOrderDto.eventId);
    if (createOrderDto.ammount > event.ammount) {
      throw new BadRequestException('Event ammount');
    }
    event.ammount -= createOrderDto.ammount;
    event = await this.eventRepository.save(event);

    return await this.orderRepository.save({
      parent,
      event,
      ammount: createOrderDto.ammount,
    });
  }

  async findAll(parentId: string, query: PaginationQueryDto) {
    const parent = await this.parentService.findOne(parentId);
    console.log(parent);
    console.log(query);
    if (parent === undefined) {
      throw new NotFoundException();
    }

    const [result, total] = await this.orderRepository.findAndCount({
      // relations: ['parent'],
      // where: {
      //   parent,
      // },
      take: query.pageSize || 25, //? DefaultValues.PAGINATION_LIMIT,
      skip: query.pageNumber * query.pageSize || 0, //? DefaultValues.PAGINATION_OFFSET,
    });
    return { result, total };
  }

  async findOne(id: string) {
    return await this.orderRepository.findOne(id);
  }

  // async update(parentId: string, id: string, updateOrderDto: UpdateOrderDto) {
  //   return `This action updates a #${id} order`;
  // }

  async remove(id: string) {
    return await this.orderRepository.delete(id);
  }
}
