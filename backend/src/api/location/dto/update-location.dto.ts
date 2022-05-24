import { CreateLocationDto } from './create-location.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateLocationDto extends PartialType(CreateLocationDto) {}
