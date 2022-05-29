import { Company } from 'src/api/company/entities/company.entity';
import { CreateUserDto } from 'src/api/user/dto/create-user.dto';
import { UserRole } from 'src/infastructure/enums/roles.enum';

export class CreateAdminDto {
  role: UserRole = UserRole.COMPANY_ADMIN;

  user: CreateUserDto;

  company: Company;
}
