import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateParentDto {
  @ApiProperty()
  @IsString()
  readonly phone: string;

  @ApiProperty()
  @IsString()
  readonly firstName: string;

  @ApiProperty()
  @IsString()
  readonly lastName: string;

  @ApiProperty()
  @IsString()
  readonly address: string;

  @ApiProperty()
  @IsString()
  readonly addressNum: string;

  @ApiProperty()
  @IsString()
  readonly city: string;

  @ApiProperty()
  @IsString()
  readonly state: string;

  @ApiProperty()
  @IsString()
  readonly country: string;

  @ApiProperty()
  @IsString()
  readonly postalCode: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly longtitude: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly latitude: string;
}
