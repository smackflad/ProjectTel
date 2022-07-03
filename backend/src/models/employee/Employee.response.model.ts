import { UserRole } from 'src/infastructure/enums/roles.enum';
import { UserResponseModel } from '../user/user.response.model';

export class EmployeeResponseModel extends UserResponseModel {
  role: UserRole;
}
