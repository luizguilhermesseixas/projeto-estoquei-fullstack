import UserModel from '../model/UserModel';
import { ServiceResponse } from '../interfaces/ServiceResponse';
import { INewUser, IUser } from '../interfaces/users/IUser';
import { IUserModel } from '../interfaces/users/IUserModel';

export default class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
  ) {}

  public async createUser(newUser: INewUser): Promise<ServiceResponse<IUser>> {
    const findUser = await this.userModel.findUserByEmail(newUser.email);

    if (findUser) {
      return {
        data: { message: 'Usuário já cadastrado.' },
        status: 'CONFLICT',
      };
    }

    const user = await this.userModel.createUser(newUser);

    return {
      data: user,
      status: 'CREATED',
    };
  }
}
