import { Request, Response } from "express";

export class MainController {

    public index(req: Request, res: Response) {
        res.status(200).send({
            message: "GET request successful! For MainController!"
        });
    }

    public fuga(req: Request, res: Response) {
        res.status(200).send({
            message: "GET request successful! For MainController! Method Fuga!"
        });
    }
}

export const mainController = new MainController();