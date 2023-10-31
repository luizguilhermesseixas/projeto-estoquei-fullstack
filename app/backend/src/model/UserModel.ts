import { PrismaClient } from '@prisma/client';
import { IUser, INewUser } from '../interfaces/Users/IUser';
import { IUserModel } from '../interfaces/Users/IUserModel';

export default class UserModel implements IUserModel {

  private prismaClient = new PrismaClient();

  async createUser(newUser: INewUser): Promise<IUser> {
    const user = await this.prismaClient.user.create({
      data: {
        email: newUser.email,
        password: newUser.password,
        username: newUser.username,
      },
    });
    return user;
  }
}
