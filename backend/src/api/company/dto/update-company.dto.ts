import { ApiProperty, PartialType, OmitType } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { UpdateLocationDto } from 'src/api/location/dto/update-location.dto';
import { UpdateUserDto } from 'src/api/user/dto/update-user.dto';
import { CreateCompanyDto } from './create-company.dto';

export class UpdateCompanyDto extends PartialType(
  OmitType(CreateCompanyDto, ['location', 'admin'] as const),
) {
  @ApiProperty({ type: UpdateUserDto })
  admin: UpdateUserDto;

  @ApiProperty({ type: UpdateLocationDto })
  location: UpdateLocationDto;
}
