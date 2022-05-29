export class UnitializedParentReponseModel {
  user: UserModel = new UserModel();
}

class UserModel {
  id: string;

  email: string;

  username?: string;
}
