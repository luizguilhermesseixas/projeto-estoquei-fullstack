import UserModel from '../model/UserModel';
import { ServiceResponse } from '../interfaces/ServiceResponse';
import { ILogin, INewUser, IUser, IUserToken } from '../interfaces/users/IUser';
import { IUserModel } from '../interfaces/users/IUserModel';
import * as bcrypt from 'bcryptjs';
import JwtUtils from '../utils/JwtUtils';

export default class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
    private jwtUtils = new JwtUtils()
  ) {}

  public async createUser(newUser: INewUser): Promise<ServiceResponse<IUser>> {

    const existingUser = await this.userModel.findUserByEmailOrUsername(newUser);

    if (existingUser) {
      return { data: { message: 'email ou nome de usuário já cadastrado.' }, status: 'CONFLICT'};
    }

    const hashedPassword = bcrypt.hashSync(newUser.password, 10);

    const user = await this.userModel.createUser({
      ...newUser,
      password: hashedPassword,
    });

    return { data: user, status: 'CREATED' };

  }

  public async login(userLogin: ILogin): Promise<ServiceResponse<IUserToken>> {

    const user = await this.userModel.findUserByEmail(userLogin.email);

    if (!user || !bcrypt.compareSync(userLogin.password, user.password)) {
      return { data: { message: 'email ou senha incorretos.' }, status: 'NOT_FOUND' };
    }

    const token = this.jwtUtils.sign({ email: user.email });

    return { data: { token }, status: 'SUCCESSFUL' };
  }
}
