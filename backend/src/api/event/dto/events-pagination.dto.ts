import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';
import { PaginationQueryDto } from '../../../infastructure/dtos/paginationQuery.dto';

export class EventsPaginationQueryDto extends PaginationQueryDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  eventName: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  companyName: string;

  @ApiProperty()
  @IsString()
  employeeId: string;
}
