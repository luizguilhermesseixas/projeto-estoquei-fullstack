export interface ILogin {
  email: string;
  password: string;
}

export interface IUser extends ILogin {
  id: number;
  username: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface INewUser {
  email: string;
  password: string;
  username: string;
}

export interface IPayload {
  email: string;
  id: number;
}

export interface IUserToken {
  token: string;
}
