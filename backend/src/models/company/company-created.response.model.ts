import { UserResponseModel } from '../user/user.response.model';
import { CompanyResponseModel } from './company.response.mode';

export class CompanyCreatedResponseModel extends CompanyResponseModel {
  admin: UserResponseModel = new UserResponseModel();
}
