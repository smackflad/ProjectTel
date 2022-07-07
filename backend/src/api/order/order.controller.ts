import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { ApiTags } from '@nestjs/swagger';
import { PaginationQueryDto } from 'src/infastructure/dtos/paginationQuery.dto';

@ApiTags('parents/orders')
@Controller('parents/:parentId/orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async create(
    @Param('parentId') parentId: string,
    @Body() createOrderDto: CreateOrderDto,
  ) {
    await this.orderService.create(parentId, createOrderDto);
  }

  @Get('history')
  async findAll(
    @Param('parentId') parentId: string,
    @Query() query: PaginationQueryDto,
  ) {
    return await this.orderService.findAll(parentId, query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.orderService.findOne(id);
  }

  // @Patch(':id')
  // async update(
  //   @Param('id') id: string,
  //   @Body() updateOrderDto: UpdateOrderDto,
  // ) {
  //   return await this.orderService.update(parentId, id, updateOrderDto);
  // }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.orderService.remove(id);
  }
}
