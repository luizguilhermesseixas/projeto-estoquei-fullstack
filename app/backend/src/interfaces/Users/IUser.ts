export interface ILogin {
  email: string;
  password: string;
}

export interface IUser extends ILogin {
  id: number;
  username: string;
  createdAt: Date;
}

export interface IPayload {
  email: string;
}

export interface IUserToken {
  token: string;
}
