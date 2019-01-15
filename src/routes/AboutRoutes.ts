import * as express from 'express';
import { aboutController } from "../controller/AboutController";

class AboutRoutes {

    public router: express.Router = express.Router();

    constructor() {
        this.config();
    }

    private config(): void {

        this.router.get('/', (req: express.Request, res: express.Response) => {
            aboutController.index(req, res);
        });
        this.router.get('/hoge', (req: express.Request, res: express.Response) => {
            aboutController.hoge(req, res);
        });
    }
}

export const aboutRoutes = new AboutRoutes().router;