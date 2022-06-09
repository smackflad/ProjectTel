import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, Min } from 'class-validator';

export class PaginationQueryDto {
  @ApiProperty()
  @Type((type) => Number)
  @IsOptional()
  @Min(0)
  pageSize: number;

  @ApiProperty()
  @Type((type) => Number)
  @IsOptional()
  @Min(0)
  pageNumber: number;
}
