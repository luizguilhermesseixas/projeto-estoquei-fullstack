import UserModel from '../model/UserModel';
import { ServiceResponse } from '../interfaces/ServiceResponse';
import { INewUser, IUser } from '../interfaces/users/IUser';
import { IUserModel } from '../interfaces/users/IUserModel';
import * as bcrypt from 'bcryptjs';

export default class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
  ) {}

  public async createUser(newUser: INewUser): Promise<ServiceResponse<IUser>> {

    const existingUser = await this.userModel.findUserByEmailOrUsername(newUser);

    if (existingUser) {
      return { data: { message: 'email ou nome de usuário já cadastrado.' }, status: 'CONFLICT'};
    }

    const hashedPassword = await bcrypt.hash(newUser.password, 10);

    const user = await this.userModel.createUser({
      ...newUser,
      password: hashedPassword,
    });

    return { data: user, status: 'CREATED' };

  }
}
