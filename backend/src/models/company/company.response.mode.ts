import { LocationResponseModel } from '../location/location.response.model';

export class CompanyResponseModel {
  id: string;

  name: string;

  taxId: string;

  taxOffice: string;

  email: string;

  phone: string;

  iban: string;

  location: LocationResponseModel = new LocationResponseModel();
}
