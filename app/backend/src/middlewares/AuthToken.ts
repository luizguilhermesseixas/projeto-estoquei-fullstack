import { Request, Response, NextFunction } from 'express';
import JwtUtils from '../utils/JwtUtils';

export default class AuthToken {
  constructor(
    private jwtUtils = new JwtUtils(),
  ) {}

  public async validateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'usuário não autenticado.' });
    }

    const decodedToken = this.jwtUtils.decode(token);
    res.locals.user = decodedToken;

    next();
  }
}
