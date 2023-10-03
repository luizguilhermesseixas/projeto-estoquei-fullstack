import express, {Express, Request, Response} from 'express';

const app: Express = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  return res.send({ message: 'HELLLOOOO!!' });
});

export default app;
