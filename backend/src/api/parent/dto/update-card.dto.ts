import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class UpdateCardDto {
  @ApiProperty()
  @IsString()
  card: string;

  @ApiProperty()
  @IsNumber()
  balance: number;
}
