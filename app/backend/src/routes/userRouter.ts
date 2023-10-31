import { Request, Response, Router } from 'express';
import UserController from '../controller/UserController';

const userController = new UserController();

const userRouter = Router();

userRouter.post('/register', (req: Request, res: Response) => userController.createUser(req, res));

export default userRouter;
