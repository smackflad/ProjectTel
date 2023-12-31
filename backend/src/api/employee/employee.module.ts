import { forwardRef, Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { Company } from 'src/api/company/entities/company.entity';
import { User } from 'src/api/user/entities/user.entity';
import { Employee } from './entities/employee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from '../company/company.module';

@Module({
  imports: [
    forwardRef(() => CompanyModule),
    TypeOrmModule.forFeature([Employee, User, Company]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
  exports: [EmployeeService],
})
export class EmployeeModule {}
