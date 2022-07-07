import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsString, IsOptional, IsBoolean } from 'class-validator';
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

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  active: boolean;
}
