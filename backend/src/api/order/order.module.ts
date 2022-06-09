import { Order } from 'src/api/order/entities/order.entity';
import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parent } from 'src/api/parent/entities/parent.entity';
import { Event } from 'src/api/event/entities/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Parent, Event])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
