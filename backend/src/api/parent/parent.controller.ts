import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ParentService } from './parent.service';
import { CreateParentDto } from './dto/create-parent.dto';
import { UpdateParentDto } from './dto/update-parent.dto';
import { PaginationQueryDto } from 'src/infastructure/Dtos/paginationQuery.dto';

@Controller('parents')
export class ParentController {
  constructor(private readonly parentService: ParentService) {}

  @Post(':id')
  async create(
    @Param('id') id: string,
    @Body() createParentDto: CreateParentDto,
  ) {
    return await this.parentService.create(id, createParentDto);
  }

  @Get()
  async findAll(@Query() query: PaginationQueryDto) {
    return await this.parentService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.parentService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateParentDto: UpdateParentDto,
  ) {
    return this.parentService.update(id, updateParentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.parentService.remove(id);
  }
}
