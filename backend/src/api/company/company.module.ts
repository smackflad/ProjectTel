import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Event } from 'src/api/event/entities/event.entity';
import { Location } from 'src/api/location/entities/location.entity';
import { Employee } from 'src/api/employee/entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Company, Event, Location, Employee])],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
