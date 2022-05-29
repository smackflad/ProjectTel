import { EventResponseModel } from './event.response.model';

export class EventCreatedResponseModel extends EventResponseModel {
  company: MinimunCompanyResponseModel = new MinimunCompanyResponseModel();
}

class MinimunCompanyResponseModel {
  id: string;

  name: string;
}
