import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { UserRole } from 'src/infastructure/enums/roles.enum';

export class CreateEmployeeDto {
  @ApiProperty({
    name: 'role',
    enum: UserRole,
    default: UserRole.COMPANY_SUPPORT,
  })
  @IsEnum(UserRole)
  role: UserRole;
}
