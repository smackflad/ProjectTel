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

  @ApiProperty({ isArray: true, type: 'datestring' })
  @IsArray()
  eventDate: string[];

  @ApiProperty()
  @IsArray()
  images: string[];

  @ApiProperty({
    name: 'eventCategory',
    enum: EventCategory,
    default: [EventCategory.CINEMA],
    isArray: true,
  })
  @IsEnum(EventCategory, { each: true })
  eventCategory: EventCategory[];

  @ApiProperty({
    name: 'ageCategory',
    enum: AgeCategory,
    default: [AgeCategory.MIDDLE_SCHOOL],
    isArray: true,
  })
  @IsEnum(AgeCategory, { each: true })
  ageCategory: AgeCategory[];

  @ApiProperty({ type: CreateLocationDto })
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CreateLocationDto)
  location: CreateLocationDto;
}
