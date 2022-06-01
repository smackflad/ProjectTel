import { Mapper } from './../../infastructure/helpers/mapper.helper';
import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from 'src/infastructure/dtos/paginationQuery.dto';
import { QueryFailedError, Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { CreateParentDto } from './dto/create-parent.dto';
import { CreateUnitializedParentDto } from './dto/createUnitialized.dto';
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
    return await this.parentRepository.insert(createParentDto);
  }

  async createUninitializedParent(
    createUnitializedParentDto: CreateUnitializedParentDto,
  ) {
    try {
      const parent: Parent = this.parentRepository.create(
        createUnitializedParentDto,
      );

      const savedParent = await this.parentRepository.save(parent);
      return Mapper.mapParentEntityToUnitializedParentResponseModel(
        savedParent,
      );
    } catch (ex: any) {
      if (ex.constructor === QueryFailedError && (ex as any).code === '23505') {
        const accDetails = await this.isParentInitialized(
          createUnitializedParentDto.user.email,
        );
        throw new ConflictException(accDetails);
      }
      throw ex;
    }
  }

  async isParentInitialized(email: string) {
    const parent = await this.parentRepository.findOne({
      relations: ['user'],
      where: { user: { email } },
    });
    if (!parent) {
      return false;
    }
    return { initialized: parent.initialized, userId: parent.user.id };
  }

  async findAll(query: PaginationQueryDto) {
    const [result, total] = await this.parentRepository.findAndCount({
      relations: ['user'],
      take: query.pageSize || 25, //? DefaultValues.PAGINATION_LIMIT,
      skip: query.pageNumber * query.pageSize || 0, //? DefaultValues.PAGINATION_OFFSET,
    });
    const mappedParents = result.map((parent) =>
      Mapper.mapParentEntityToParentResponseModel(parent),
    );
    return { result: mappedParents, total };
  }

  async findOne(id: string) {
    const parent = await this.parentRepository.findOne(id);
    if (parent === undefined) {
      throw new NotFoundException();
    }
    return Mapper.mapParentEntityToParentResponseModel(parent);
  }

  async findOneByEmail(email: string) {
    const parent = await this.parentRepository.findOne({
      relations: ['user'],
      where: { user: { email } },
    });
    if (parent === undefined) {
      throw new NotFoundException();
    }
    return Mapper.mapParentEntityToParentResponseModel(parent);
  }

  async update(id: string, updateParentDto: UpdateParentDto) {
    const foundParent = await this.parentRepository.findOne(id);

    if (foundParent.initialized)
      throw new UnprocessableEntityException('parent already initialized');

    const updatedParent = {
      ...foundParent,
      ...updateParentDto,
      initialized: true,
    };
    await this.parentRepository.save(updatedParent);

    return Mapper.mapParentEntityToParentResponseModel(updatedParent);
  }

  async remove(id: string) {
    return await this.parentRepository.delete(id);
  }
}
