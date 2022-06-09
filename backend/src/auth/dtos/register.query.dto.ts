import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional } from 'class-validator';

export enum RegisterType {
  PARENT = 'parent',
  COMPANY = 'company',
}

export enum RegistrationStep {
  COMPANY_REGISTRIATION_STEP = 0,
  PARENT_INITIALIZATION_STEP = 1,
  PARENT_FINISH_STEP = 2,
}

export class RegisterQueryDto {
  @IsEnum(RegisterType)
  readonly type: RegisterType;

  @IsEnum(RegistrationStep)
  readonly step: RegistrationStep;
}
