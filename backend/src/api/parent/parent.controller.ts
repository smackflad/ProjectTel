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
import { UpdateCardDto } from './dto/update-card.dto';
import { UpdateParentDto } from './dto/update-parent.dto';
import { PaginationQueryDto } from 'src/infastructure/dtos/paginationQuery.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('parents')
@Controller('parents')
export class ParentController {
  constructor(private readonly parentService: ParentService) {}

  // @Post()
  // async create(@Body() createParentDto: CreateParentDto) {
  //   return await this.parentService.create(createParentDto);
  // }

  @Get()
  async findAll(@Query() query: PaginationQueryDto) {
    return await this.parentService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.parentService.findOne(id);
  }

  @Get(':id/profile')
  async GetProfile(@Param('id') id: string) {
    return await this.parentService.findParentProfile(id);
  }

  @Get(':id/wallet')
  async getWallet(@Param('id') id: string) {
    return await this.parentService.findWallet(id);
  }

  @Patch(':id/wallet')
  async updateWallet(
    @Param('id') id: string,
    @Body() updateCardDto: UpdateCardDto,
  ) {
    return await this.parentService.updateWallet(id, updateCardDto);
  }

  @Get('findOneByEmail/:email')
  async findOneByEmail(@Param('email') email: string) {
    return this.parentService.findOneByEmail(email);
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
