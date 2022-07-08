import { AgeCategory } from 'src/infastructure/enums/age-category.enum';
import { EventCategory } from 'src/infastructure/enums/event-category.enum';
import { LocationResponseModel } from '../location/location.response.model';

export class EventResponseModel {
  id: string;

  title: string;

  description: string;

  eventDate: string;

  multipleEventDates: string[];

  price: number;

  ammount: number;

  companyId: string;

  companyName: string;

  eventCategory: EventCategory;

  ageCategory: AgeCategory;

  images: string[];

  active: boolean;

  location: LocationResponseModel = new LocationResponseModel();
}
