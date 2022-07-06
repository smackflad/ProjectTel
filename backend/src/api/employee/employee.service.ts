import { Company } from './../company/entities/company.entity';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mapper } from 'src/infastructure/helpers/mapper.helper';
import { Like, Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { CreateAdminDto } from './dto/create-admin.dto';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeePaginationQueryDto } from './dto/get-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    @InjectRepository(User)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    const { companyId, ...event } = createEmployeeDto;

    const company = await this.companyRepository.findOne(companyId);

    const employee = this.employeeRepository.create({ ...event, company });

    const savedEmployee = await this.employeeRepository.save(employee);

    return Mapper.mapEmployeeEntityToEmployeeResponseModel(savedEmployee);
  }

  async createAdmin(createAdminDto: CreateAdminDto) {
    const admin = this.employeeRepository.create(createAdminDto);

    return this.employeeRepository.save(admin);
  }

  async findEmployeeRoleByEmail(email: string) {
    const employee = await this.employeeRepository.findOne({
      relations: ['user', 'company'],
      where: { user: { email } },
    });
    if (!employee) return false;

    return {
      role: employee.role,
      id: employee.user.id,
      companyId: employee.company.id,
    };
  }

  async findEmployeeRoleById(id: string) {
    const employee = await this.employeeRepository.findOne(id);
    if (!employee) return false;

    return employee.role;
  }

  async findAll(query: EmployeePaginationQueryDto) {
    const [result, total] = await this.employeeRepository.findAndCount({
      relations: ['company', 'user'],
      where: [
        { company: { name: Like(`%${query.search}%`) } },
        { user: { firstName: Like(`%${query.search}%`) } },
        { user: { lastName: Like(`%${query.search}%`) } },
      ],
      take: query.pageSize || 25, //? DefaultValues.PAGINATION_LIMIT,
      skip: query.pageNumber * query.pageSize || 0, //? DefaultValues.PAGINATION_OFFSET,
    });

    const mappedEmployees = result.map((employee) =>
      Mapper.mapEmployeeEntityToEmployeeWithCompanyDetailsResponseModel(
        employee,
      ),
    );
    return { items: mappedEmployees, total };
  }

  async findOne(id: string) {
    const employee = await this.employeeRepository.findOne(id);

    return Mapper.mapEmployeeEntityToEmployeeResponseModel(employee);
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  async remove(id: string) {
    return await this.employeeRepository.delete(id);
  }
}
