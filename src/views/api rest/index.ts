import express from 'express'
import cors from 'cors';
import morgan from 'morgan';

import config from '../../config';
import routers from './routes';
import errorHandle from './middlewares/error.middleware';
import { syncSequelize } from '../../controllers/shared/infrastructure/NewSequelize';

export class AppApiRest {
    private app: express.Application;

    constructor() {
        this.app = express();
        this.app.set('port', config.EMCO_SERVER_PORT);
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());

        routers(this.app);

        this.app.use(errorHandle);
    }

    public async run() {
        this.app.listen(config.EMCO_SERVER_PORT, () => {
            console.log(`Connected successfully to server on port: ${config.EMCO_SERVER_PORT} - http://localhost:${config.EMCO_SERVER_PORT}`);
        });
        syncSequelize();
    }
}