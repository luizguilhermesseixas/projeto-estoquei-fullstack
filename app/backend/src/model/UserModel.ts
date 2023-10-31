import { IUser, INewUser } from '../interfaces/Users/IUser';
import { IUserModel } from '../interfaces/Users/IUserModel';
import prismaClient from './database/prismaClient';

export default class UserModel implements IUserModel {

  private model = prismaClient.user;

  async createUser(newUser: INewUser): Promise<IUser> {
    const user = await this.model.create({
      data: {
        email: newUser.email,
        password: newUser.password,
        username: newUser.username,
      },
    });
    return user;
  }
}
