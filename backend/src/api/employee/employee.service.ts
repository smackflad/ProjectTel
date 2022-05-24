import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly parentRepository: Repository<Employee>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    return 'This action adds a new employee';
  }

  async findAll() {
    return `This action returns all employee`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} employee`;
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  async remove(id: string) {
    return `This action removes a #${id} employee`;
  }
}
