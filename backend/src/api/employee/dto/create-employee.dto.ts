import { CreateUserDto } from 'src/api/user/dto/create-user.dto';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsEnum,
  IsNotEmptyObject,
  IsObject,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { UserRole } from 'src/infastructure/enums/roles.enum';

export class CreateEmployeeDto {
  @ApiProperty({
    name: 'role',
    enum: UserRole,
    default: UserRole.COMPANY_SUPPORT,
  })
  @IsEnum(UserRole)
  role: UserRole;

  @ApiProperty({ type: CreateUserDto })
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CreateUserDto)
  user: CreateUserDto;

  @ApiProperty()
  @IsUUID()
  companyId: string;
}
