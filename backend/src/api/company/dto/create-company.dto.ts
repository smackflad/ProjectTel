import { CreateLocationDto } from './../../location/dto/create-location.dto';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsEmail,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateUserDto } from 'src/api/user/dto/create-user.dto';
import { Type } from 'class-transformer';

export class CreateCompanyDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  taxId: string;

  @ApiProperty()
  @IsString()
  taxOffice: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsOptional()
  phone: string;

  @ApiProperty()
  @IsString()
  iban: string;

  @ApiProperty({ type: CreateUserDto })
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CreateUserDto)
  admin: CreateUserDto;

  @ApiProperty({ type: CreateLocationDto })
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CreateLocationDto)
  location: CreateLocationDto;
}
