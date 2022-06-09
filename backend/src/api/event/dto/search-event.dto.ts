import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsEnum,
  IsNumber,
  IsString,
  IsOptional,
} from 'class-validator';
import { AgeCategory } from 'src/infastructure/enums/age-category.enum';
import { EventCategory } from 'src/infastructure/enums/event-category.enum';

export class SearchEventDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  title: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description: string;

  @ApiPropertyOptional({
    name: 'eventCategory',
    enum: EventCategory,
    isArray: true,
    default: EventCategory.CINEMA,
  })
  @IsOptional()
  @IsEnum(EventCategory, { each: true })
  eventCategory: EventCategory[];

  @ApiPropertyOptional({
    name: 'ageCategory',
    enum: AgeCategory,
    isArray: true,
    default: AgeCategory.MIDDLE_SCHOOL,
  })
  @IsOptional()
  @IsEnum(AgeCategory, { each: true })
  ageCategory: AgeCategory[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  startDate: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  endDate: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  long: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  lat: number;
}
