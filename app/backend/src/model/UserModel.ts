import { PrismaClient } from '@prisma/client';
import { IUser, INewUser } from '../interfaces/users/IUser';
import { IUserModel } from '../interfaces/users/IUserModel';

export default class UserModel implements IUserModel {

  constructor(
    private prismaClient = new PrismaClient(),
  ) {}

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

  async findUserByEmail(email: string): Promise<IUser | null> {
    const user = await this.prismaClient.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  }

  async findUserByUsername(username: string): Promise<IUser | null> {
    const user = await this.prismaClient.user.findUnique({
      where: {
        username,
      },
    });
    return user;
  }
}
