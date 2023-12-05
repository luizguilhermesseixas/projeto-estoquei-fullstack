import { Request, Response, NextFunction } from 'express';
import JwtUtils from '../utils/JwtUtils';

const jwtUtils = new JwtUtils();


export default class AuthToken {

  public async validateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'usuário não autenticado.' });
    }

    const decodedToken = jwtUtils.decode(token);
    res.locals.user = decodedToken;

    next();
  }
}
