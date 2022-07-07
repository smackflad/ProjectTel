import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UnauthorizedException,
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ApiTags } from '@nestjs/swagger';
import { EventsPaginationQueryDto } from './dto/events-pagination.dto';
import { EmployeeService } from '../employee/employee.service';
import { UserRole } from 'src/infastructure/enums/roles.enum';
import { Console } from 'console';

@ApiTags('events')
@Controller('companies/:companyId/events')
export class EventController {
  constructor(
    private readonly eventService: EventService,
    private readonly employeeService: EmployeeService,
  ) {}

  @Post()
  async create(
    @Param('companyId') companyId: string,
    @Body() createEventDto: CreateEventDto,
  ) {
    return await this.eventService.create(companyId, createEventDto);
  }

  @Get()
  async findAll(
    @Param('companyId') companyId: string,
    @Query() query: EventsPaginationQueryDto,
  ) {
    const employeeRole = await this.employeeService.findEmployeeRoleById(
      query.employeeId,
    );
    if (
      !employeeRole ||
      (employeeRole !== UserRole.ADMIN &&
        employeeRole !== UserRole.COMPANY_ADMIN)
    )
      throw new UnauthorizedException('Cannot verify employee Id');
    else if (employeeRole === UserRole.COMPANY_ADMIN) {
      query.companyName = '';
    }

    return this.eventService.findAll(companyId, employeeRole, query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.eventService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    return this.eventService.update(id, updateEventDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.eventService.remove(id);
  }
}
