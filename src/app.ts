import * as express from 'express';
// http://info-i.net/express-body-parser#body-parser
import * as bodyParser from 'body-parser';
import { mainRoutes } from "./routes/MainRoutes";

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    private config() {

        /**
         * <title>
         *   bodyParser.json([options])
         * <description>
         *   データをJSONとして取得するミドルウェアを作成する。
         * <url>
         *   https://github.com/expressjs/body-parser#bodyparserjsonoptions
         */
        this.app.use(bodyParser.json());

        /**
         * <title>
         *   bodyParser.urlencoded([options])
         * <description>
         *   メディアタイプがapplication/x-www-form-urlencodedのデータをオブジェクトとして取得するミドルウェアを作成する。
         *     ※application/x-www-form-urlencodedについて→https://developer.mozilla.org/ja/docs/Web/HTTP/Methods/POST
         * <options>
         *   extended:
         *     URLエンコードされたデータをクエリ文字列ライブラリとqsライブラリのどちらで解析するかを選択する。
         *       ※違いについて→http://info-i.net/querystring-parse
         *     true : qsライブラリを使用(default)
         *     false: クエリ文字列ライブラリを使用
         * <url>
         *   https://github.com/expressjs/body-parser#bodyparserurlencodedoptions
         */
        this.app.use(bodyParser.urlencoded( {extended: false }));

        // パスに/mainがあるときこのルーターが呼ばれる
        this.app.use('/main', mainRoutes);
    }
}

export default new App().app;