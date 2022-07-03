import { LocationResponseModel } from '../location/location.response.model';

export class EventResponseModel {
  id: string;

  title: string;

  description: string;

  eventDate: string;

  price: number;

  ammount: number;

  companyId: string;

  companyName: string;

  images: string[];

  active: boolean;

  location: LocationResponseModel = new LocationResponseModel();
}
