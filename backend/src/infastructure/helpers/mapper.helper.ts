import { Parent } from 'src/api/parent/entities/parent.entity';
import { ParentReponseModel } from 'src/models/parent/parent.response.model';
import { UnitializedParentReponseModel } from 'src/models/parent/unitializedParent.response.model';

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
}
