import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { Company } from 'src/api/company/entities/company.entity';
import { Location } from 'src/api/location/entities/location.entity';
import { Event } from 'src/api/event/entities/event.entity';
import { Order } from 'src/api/order/entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Order, Location, Company])],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
