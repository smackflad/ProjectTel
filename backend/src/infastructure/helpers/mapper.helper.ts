import { Company } from 'src/api/company/entities/company.entity';
import { Employee } from 'src/api/employee/entities/employee.entity';
import { Parent } from 'src/api/parent/entities/parent.entity';
import { Event } from 'src/api/event/entities/event.entity';
import { CompanyCreatedResponseModel } from 'src/models/company/company-created.response.model';
import { CompanyResponseModel } from 'src/models/company/company.response.mode';
import { EventResponseModel } from 'src/models/event/event.response.model';
import { LocationResponseModel } from 'src/models/location/location.response.model';
import { ParentReponseModel } from 'src/models/parent/parent.response.model';
import { UnitializedParentReponseModel } from 'src/models/parent/unitializedParent.response.model';
import { EventCreatedResponseModel } from 'src/models/event/event-created.response.model';

export class Mapper {
  static mapParentEntityToUnitializedParentResponseModel(
    parent: Parent,
  ): UnitializedParentReponseModel {
    const res: UnitializedParentReponseModel =
      new UnitializedParentReponseModel();

    res.user.id = parent.user.id;
    res.user.email = parent.user.email;

    return res;
  }

  static mapParentEntityToParentResponseModel(
    parent: Parent,
  ): ParentReponseModel {
    const res: ParentReponseModel = new ParentReponseModel();

    res.user.email = parent.user.email;
    res.user.id = parent.user.id;

    res.birthDate = parent.birthDate;
    res.firstName = parent.firstName;
    res.lastName = parent.lastName;
    res.phone = parent.phone;

    return res;
  }

  static mapCompanyEntityToCompanyCreatedResponseModel(
    company: Company,
    admin: Employee,
  ): CompanyCreatedResponseModel {
    const res: CompanyCreatedResponseModel = new CompanyCreatedResponseModel();

    res.name = company.name;
    res.email = company.email;
    res.phone = company.phone;
    res.taxId = res.taxId;
    res.taxOffice = res.taxOffice;
    res.id = company.id;
    res.admin.email = admin.user.email;
    res.admin.id = admin.user.id;
    res.location.address = company.location.address;
    res.location.addressNum = company.location.addressNum;
    res.location.city = company.location.city;
    res.location.state = company.location.state;
    res.location.postalCode = company.location.postalCode;
    res.location.country = company.location.country;
    res.location.latitude = company.location.latitude;
    res.location.longtitude = company.location.longtitude;

    return res;
  }

  static mapCompanyEntityToCompanyResponseModel(
    company: Company,
  ): CompanyResponseModel {
    const res: CompanyResponseModel = new CompanyResponseModel();

    res.name = company.name;
    res.email = company.email;
    res.phone = company.phone;
    res.taxId = res.taxId;
    res.taxOffice = res.taxOffice;
    res.id = company.id;
    res.location.address = company.location.address;
    res.location.addressNum = company.location.addressNum;
    res.location.city = company.location.city;
    res.location.state = company.location.state;
    res.location.postalCode = company.location.postalCode;
    res.location.country = company.location.country;
    res.location.latitude = company.location.latitude;
    res.location.longtitude = company.location.longtitude;

    return res;
  }

  static mapEventEntityToEventResponseModel(event: Event): EventResponseModel {
    const res: EventResponseModel = new EventResponseModel();

    res.id = event.location.id;
    res.title = event.title;
    res.description = event.description;
    res.price = event.price;
    res.ammount = event.ammount;
    res.images = event.images;
    res.eventDate = event.eventDate;

    res.location.address = event.location.address;
    res.location.addressNum = event.location.addressNum;
    res.location.city = event.location.city;
    res.location.state = event.location.state;
    res.location.postalCode = event.location.postalCode;
    res.location.country = event.location.country;
    res.location.latitude = event.location.latitude;
    res.location.longtitude = event.location.longtitude;

    return res;
  }

  static mapEventEntityToEventCreatedResponseModel(
    event: Event,
  ): EventCreatedResponseModel {
    const res: EventCreatedResponseModel = new EventCreatedResponseModel();

    res.id = event.location.id;
    res.title = event.title;
    res.description = event.description;
    res.price = event.price;
    res.ammount = event.ammount;
    res.images = event.images;
    res.eventDate = event.eventDate;

    res.location.address = event.location.address;
    res.location.addressNum = event.location.addressNum;
    res.location.city = event.location.city;
    res.location.state = event.location.state;
    res.location.postalCode = event.location.postalCode;
    res.location.country = event.location.country;
    res.location.latitude = event.location.latitude;
    res.location.longtitude = event.location.longtitude;

    res.company.name = event.company.name;
    res.company.id = event.company.id;

    return res;
  }
}
