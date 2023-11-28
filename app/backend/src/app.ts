import express from 'express';
import router from './routes';

class App {
  public app: express.Express ;

  constructor() {
    this.app = express();

    this.app.use(express.json());

    this.routes();
  }

  public start(port: number | string): void {
    this.app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  }

  private routes(): void {
    this.app.use(router);
  }
}

export default App;
