import {
  Controller,
  Get,
  Body,
  Query,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PaginationQueryDto } from 'src/infastructure/dtos/paginationQuery.dto';
import { SearchEventDto } from './dto/search-event.dto';
import { SearchService } from './search.service';

@ApiTags('events')
@Controller('/')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('search')
  async findAll(
    @Query() query: PaginationQueryDto,
    @Body() search: SearchEventDto,
  ) {
    return await this.searchService.findAll(query, search);
  }
}
