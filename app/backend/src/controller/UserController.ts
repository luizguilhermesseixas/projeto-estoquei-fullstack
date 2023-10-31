import { Request, Response } from 'express';
import UserService from '../service/UserService';
import mapStatusHTTP from '../utils/mapStatusHttp';

export default class UserController {
  constructor(
    private userService = new UserService(),
  ) {}

  public async createUser(req: Request, res: Response) {
    const newUser = req.body;
    const { status, data } = await this.userService.createUser(newUser);
    res.status(mapStatusHTTP(status)).json(data);
  }
}