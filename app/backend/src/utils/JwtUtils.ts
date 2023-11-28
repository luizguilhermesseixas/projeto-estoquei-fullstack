import { IPayload } from '../interfaces/users/IUser';
import * as jwt from 'jsonwebtoken';

export default class JwtUtils {
  private jwtSecret = process.env.JWT_SECRET || 'secret';
  private jwtOptions: jwt.SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  sign(payload: IPayload): string {
    const token = jwt.sign(payload, this.jwtSecret, this.jwtOptions);
    return token;
  }

  decode(token: string): IPayload {
    const decodedToken = jwt.verify(token, this.jwtSecret);
    return decodedToken as IPayload;
  }
}
