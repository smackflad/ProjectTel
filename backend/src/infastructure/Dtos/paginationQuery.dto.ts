import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @ApiProperty()
  @Type((type) => Number)
  @IsOptional()
  @IsPositive()
  limit: number;

  @ApiProperty()
  @Type((type) => Number)
  @IsOptional()
  @IsPositive()
  offset: number;
}
