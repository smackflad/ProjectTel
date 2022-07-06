import { ApiPropertyOptional, OmitType, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';
import { UpdateLocationDto } from 'src/api/location/dto/update-location.dto';
import { CreateEventDto } from './create-event.dto';

export class UpdateEventDto extends PartialType(
  OmitType(CreateEventDto, ['location'] as const),
) {
  @ApiPropertyOptional({ type: UpdateLocationDto })
  @Type(() => UpdateLocationDto)
  @IsOptional()
  location: UpdateLocationDto;

  @ApiPropertyOptional()
  @IsBoolean()
  active: boolean;
}
