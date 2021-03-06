import * as express from 'express';
import { mainController } from '../controller/MainController';

class MainRoutes {

    public router: express.Router = express.Router();

    constructor() {
        this.config();
    }

    private config(): void {

        this.router.get('/', (req: express.Request, res: express.Response) => {
            mainController.index(req, res);
        });
        this.router.get('/fuga', (req: express.Request, res: express.Response) => {
            mainController.fuga(req, res);
        });
    }
}

export const mainRoutes = new MainRoutes().router;