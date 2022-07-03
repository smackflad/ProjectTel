import { EmployeeResponseModel } from './Employee.response.model';

export class EmployeeWithCompanyDetailsResponseModel extends EmployeeResponseModel {
  companyName: string;

  companyId: string;
}
