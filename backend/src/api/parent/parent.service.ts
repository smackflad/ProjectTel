import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from 'src/infastructure/dtos/paginationQuery.dto';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { CreateParentDto } from './dto/create-parent.dto';
import { UpdateParentDto } from './dto/update-parent.dto';
import { Parent } from './entities/parent.entity';

@Injectable()
export class ParentService {
  constructor(
    @InjectRepository(Parent)
    private readonly parentRepository: Repository<Parent>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createParentDto: CreateParentDto) {
    // const user = await this.userRepository.findOne(id);
    // return await this.parentRepository.save({ user, ...createParentDto });
  }

  async findAll(query: PaginationQueryDto) {
    const [result, total] = await this.parentRepository.findAndCount({
      where: {},
      take: query.pageSize || 25, //? DefaultValues.PAGINATION_LIMIT,
      skip: query.pageNumber * query.pageSize || 0, //? DefaultValues.PAGINATION_OFFSET,
    });
    return { result, total };
  }

  async findOne(id: string) {
    return await this.parentRepository.findOne(id);
  }

  async update(id: string, updateParentDto: UpdateParentDto) {
    return await this.parentRepository.update(id, updateParentDto);
  }

  async remove(id: string) {
    return await this.parentRepository.delete(id);
  }
}
