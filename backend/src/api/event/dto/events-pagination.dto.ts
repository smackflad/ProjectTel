import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsBooleanString,
} from 'class-validator';
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
  @IsBooleanString()
  // @Transform(({ value }) => {
  //   console.log(value);
  //   return [true, 'enabled', 'true', 1, '1'].indexOf(value) > -1;
  // })
  active: string;
}
