import { CreateLocationDto } from './../../location/dto/create-location.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { CreateUserDto } from 'src/api/user/dto/create-user.dto';

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
  email: string;

  @ApiProperty()
  @IsOptional()
  phone: string;

  @ApiProperty()
  @IsString()
  iban: string;

  @ApiProperty({ type: CreateUserDto })
  admin: CreateUserDto;

  //location details
  @ApiProperty({ type: CreateLocationDto })
  location: CreateLocationDto;
}
