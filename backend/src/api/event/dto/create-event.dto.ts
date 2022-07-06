import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsDateString,
  IsDefined,
  IsEnum,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateLocationDto } from 'src/api/location/dto/create-location.dto';
import { AgeCategory } from 'src/infastructure/enums/age-category.enum';
import { EventCategory } from 'src/infastructure/enums/event-category.enum';

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

  @ApiProperty({ type: 'datestring' })
  @IsDateString()
  eventDate: string;

  @ApiProperty()
  @IsArray()
  images: string[];

  @ApiProperty({
    name: 'eventCategory',
    enum: EventCategory,
    default: EventCategory.CINEMA,
  })
  @IsEnum(EventCategory)
  eventCategory: EventCategory;

  @ApiProperty({
    name: 'ageCategory',
    enum: AgeCategory,
    default: AgeCategory.MIDDLE_SCHOOL,
  })
  @IsEnum(AgeCategory)
  ageCategory: AgeCategory;

  @ApiProperty({ type: CreateLocationDto })
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CreateLocationDto)
  location: CreateLocationDto;
}
