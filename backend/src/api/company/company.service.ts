import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from 'src/infastructure/dtos/paginationQuery.dto';
import { UserRole } from 'src/infastructure/enums/roles.enum';
import { Repository } from 'typeorm';
import { EmployeeService } from '../employee/employee.service';
import { Employee } from '../employee/entities/employee.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    private readonly employeeService: EmployeeService,
  ) {}

  async create(createCompanyDto: CreateCompanyDto) {
    console.log(createCompanyDto);
    // create admin
    // const { admin, ...company } = createCompanyDto;
    // const result = await this.companyRepository.save(company);
    // // admin.company = result;
    // await this.employeeService.create({
    //   // result: company,
    //   // ...admin,
    //   role: UserRole.ADMIN,
    // });

    // return result;
  }

  async findAll(query: PaginationQueryDto) {
    const [result, total] = await this.companyRepository.findAndCount({
      where: {},
      take: query.pageSize || 25, //? DefaultValues.PAGINATION_LIMIT,
      skip: query.pageNumber * query.pageSize || 0, //? DefaultValues.PAGINATION_OFFSET,
    });
    return { result, total };
  }

  async findOne(id: string) {
    return `This action returns a #${id} company`;
  }

  async update(id: string, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  async remove(id: string) {
    return `This action removes a #${id} company`;
  }
}
