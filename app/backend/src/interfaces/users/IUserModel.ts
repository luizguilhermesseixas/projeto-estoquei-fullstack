import { INewUser, IUser } from './IUser';

export interface IUserReader<T> {
  createUser(newUser: INewUser): Promise<T>;
  findUserByEmail(email: string): Promise<T | null>;
  findUserByUsername(username: string): Promise<T | null>;
  findUserByEmailOrUsername(newUser: INewUser): Promise<T | null>;
}

export type IUserModel = IUserReader<IUser>;
