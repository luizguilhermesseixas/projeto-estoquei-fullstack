import { Request, Response, Router } from 'express';
import UserController from '../controller/UserController';
import UserValidation from '../middlewares/users/UserValidation';
import AuthToken from '../middlewares/AuthToken';

const userController = new UserController();
const authToken = new AuthToken();

const userRouter = Router();

userRouter.post(
  '/account',
  UserValidation.validateFields,
  (req: Request, res: Response) => userController.createUser(req, res)
);

userRouter.post(
  '/login',
  UserValidation.validateLogin,
  (req: Request, res: Response) => userController.login(req, res)
);

userRouter.put(
  '/account',
  UserValidation.validateFields,
  authToken.validateToken,
  (req: Request, res: Response) => userController.updateUser(req, res)
);


export default userRouter;
