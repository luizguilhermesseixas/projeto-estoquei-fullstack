import { INewUser, IUser } from './IUser';

export interface IUserReader<T> {
  createUser(newUser: INewUser): Promise<T>;
}

export type IUserModel = IUserReader<IUser>;
