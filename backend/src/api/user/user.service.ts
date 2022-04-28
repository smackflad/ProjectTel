import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from 'src/infastructure/Dtos/paginationQuery.dto';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.insert(createUserDto);
  }

  async findAll(query: PaginationQueryDto) {
    const [result, total] = await this.userRepository.findAndCount({
      where: {},
      take: query.limit || 25, //? DefaultValues.PAGINATION_LIMIT,
      skip: query.offset || 0, //? DefaultValues.PAGINATION_OFFSET,
    });
    return { result, total };
  }

  async findOne(id: number) {
    return await this.userRepository.findOne(id);
  }

  async findOneByUsername(username: string) {
    return await this.userRepository.findOne({
      where: {
        username,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
