import { Request, Response } from "express";

export class AboutController {

    public index(req: Request, res: Response) {
        res.status(200).send({
            message: "GET request successful! For AboutController!"
        });
    }

    public hoge(req: Request, res: Response) {
        res.status(200).send({
            message: "GET request successful! For AboutController! Method Hoge!"
        });
    }
}

export const aboutController = new AboutController();