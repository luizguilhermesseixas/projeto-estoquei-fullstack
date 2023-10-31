import UserModel from '../model/UserModel';
import { ServiceResponse } from '../interfaces/ServiceResponse';
import { INewUser } from '../interfaces/Users/IUser';
import { IUserModel } from '../interfaces/Users/IUserModel';

export default class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
  ) {}

  public async createUser(newUser: INewUser): Promise<ServiceResponse<INewUser>> {
    const user = await this.userModel.createUser(newUser);
    return {
      data: user,
      status: 'CREATED',
    };
  }
}
