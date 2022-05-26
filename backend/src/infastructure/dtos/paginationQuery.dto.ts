import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @ApiProperty()
  @Type((type) => Number)
  @IsOptional()
  @IsPositive()
  pageSize: number;

  @ApiProperty()
  @Type((type) => Number)
  @IsOptional()
  @IsPositive()
  pageNumber: number;
}
