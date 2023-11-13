import { NextFunction, Request, Response } from 'express';
import EmailRegex from './EmailRegex';

export default class UserValidation {
  private static passwordMinLength = 6;

  public static validateFields(req: Request, res: Response, next: NextFunction): Response | void {
    const { email, password, username } = req.body;

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

}
