import { INewUser, IUser } from './IUser';

export interface IUserReader<T> {
  createUser(newUser: INewUser): Promise<T>;
  findUserByEmail(email: string): Promise<T | null>;
}

export type IUserModel = IUserReader<IUser>;
