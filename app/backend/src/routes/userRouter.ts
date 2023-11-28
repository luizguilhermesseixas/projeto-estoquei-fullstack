import { Request, Response, Router } from 'express';
import UserController from '../controller/UserController';
import UserValidation from '../middlewares/users/UserValidation';

const userController = new UserController();

const userRouter = Router();

userRouter.post(
  '/register',
  UserValidation.validateFields,
  (req: Request, res: Response) => userController.createUser(req, res)
);

userRouter.post(
  '/login',
  UserValidation.validateLogin,
  (req: Request, res: Response) => userController.login(req, res)
);


export default userRouter;
