import { Mapper } from 'src/infastructure/helpers/mapper.helper';
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
    let parent = await this.parentRepository.findOne(parentId);
    let event = await this.eventRepository.findOne(createOrderDto.eventId);
    const askedAmmount = createOrderDto.ammount;
    const availableAmmount = event.ammount;
    console.log(availableAmmount, askedAmmount, parent.balance, event.price);
    if (
      askedAmmount > availableAmmount ||
      parent.balance < askedAmmount * event.price
    ) {
      throw new BadRequestException("Can't proccess order");
    }
    event.ammount -= askedAmmount;
    parent.balance -= askedAmmount * event.price;
    event = await this.eventRepository.save(event);
    parent = await this.parentRepository.save(parent);

    return await this.orderRepository.save({
      parentId: parent.user.id,
      event,
      ammount: createOrderDto.ammount,
    });
  }

  async findAll(parentId: string, query: PaginationQueryDto) {
    const [result, total] = await this.orderRepository.findAndCount({
      relations: ['event'],
      where: {
        parentId,
      },
      take: query.pageSize || 25, //? DefaultValues.PAGINATION_LIMIT,
      skip: query.pageNumber * query.pageSize || 0, //? DefaultValues.PAGINATION_OFFSET,
    });

    console.log(result);

    const mappedOrders = result.map((order) =>
      Mapper.mapOrdersToOrderHistoryResponseModel(order),
    );

    return { items: mappedOrders, total };
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
