import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { PaginationQueryDto } from 'src/infastructure/dtos/paginationQuery.dto';

export class EmployeePaginationQueryDto extends PaginationQueryDto {
  @ApiProperty()
  @IsString()
  search: string;
}
