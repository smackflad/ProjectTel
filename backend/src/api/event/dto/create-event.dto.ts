import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsDateString,
  IsDefined,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateLocationDto } from 'src/api/location/dto/create-location.dto';

export class CreateEventDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsNumber()
  ammount: number;

  @ApiProperty()
  @IsDateString()
  eventDate: string;

  @ApiProperty()
  @IsString()
  companyId: string;

  @ApiProperty()
  @IsArray()
  images: string[];

  @ApiProperty({ type: CreateLocationDto })
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CreateLocationDto)
  location: CreateLocationDto;
}
