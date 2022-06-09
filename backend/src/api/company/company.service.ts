import { Mapper } from './../../infastructure/helpers/mapper.helper';
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
    // create admin
    const { admin, ...company } = createCompanyDto;
    const companyCreated = await this.companyRepository.save(company);

    const adminCreated = await this.employeeService.createAdmin({
      company: companyCreated,
      user: admin,
      role: UserRole.COMPANY_ADMIN,
    });

    return Mapper.mapCompanyEntityToCompanyCreatedResponseModel(
      companyCreated,
      adminCreated,
    );
  }

  async findAll(query: PaginationQueryDto) {
    const [result, total] = await this.companyRepository.findAndCount({
      where: {},
      take: query.pageSize || 25, //? DefaultValues.PAGINATION_LIMIT,
      skip: query.pageNumber * query.pageSize || 0, //? DefaultValues.PAGINATION_OFFSET,
    });
    const mappedCompanies = result.map((company) =>
      Mapper.mapCompanyEntityToCompanyResponseModel(company),
    );
    return { result: mappedCompanies, total };
  }

  async findOne(id: string) {
    const company = await this.companyRepository.findOne(id);
    return Mapper.mapCompanyEntityToCompanyResponseModel(company);
  }

  async update(id: string, updateCompanyDto: UpdateCompanyDto) {
    await this.companyRepository.update(id, updateCompanyDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    return this.companyRepository.delete(id);
  }
}
