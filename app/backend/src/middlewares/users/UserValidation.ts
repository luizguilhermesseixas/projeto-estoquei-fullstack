import { NextFunction, Request, Response } from 'express';
import EmailRegex from './EmailRegex';
import { ILogin, INewUser } from '../../interfaces/users/IUser';

export default class UserValidation {
  private static passwordMinLength = 6;

  public static validateFields(req: Request, res: Response, next: NextFunction): Response | void {
    const { email, password, username } = req.body as INewUser;

    if (!email || !password || !username) {
      res.status(400).json({ message: 'Todos os campos devem estar preenchidos.' });
    }

    if (!EmailRegex.isValidEmail(email) || password.length < UserValidation.passwordMinLength) {
      return res.status(401).json({
        message: 'Email ou senha inválidos.',
      });
    }

    next();
  }

  public static validateLogin(req: Request, res: Response, next: NextFunction): Response | void {
    const { email, password } = req.body as ILogin;

    if (!email || !password) {
      return res.status(400).json({ message: 'Preencha os campos de Email e Senha.' });
    }

    next();
  }
}
