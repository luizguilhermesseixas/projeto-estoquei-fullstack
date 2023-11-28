import { Request, Response } from 'express';
import UserService from '../service/UserService';
import mapStatusHTTP from '../utils/mapStatusHttp';
import { ILogin, INewUser } from '../interfaces/users/IUser';

export default class UserController {
  constructor(
    private userService = new UserService(),
  ) {}

  public async createUser(req: Request, res: Response) {
    try {
      const newUser: INewUser = req.body;
      const { status, data } = await this.userService.createUser(newUser);
      res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }

  }

  public async login(req: Request, res: Response) {
    try {
      const userLogin: ILogin = req.body;
      const { status, data } = await this.userService.login(userLogin);
      res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
