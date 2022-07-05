import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsUUID } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty()
  @IsNumber()
  ammount: number;

  @ApiProperty()
  @IsUUID()
  eventId: string;
}
