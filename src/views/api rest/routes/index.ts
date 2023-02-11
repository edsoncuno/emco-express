import express from "express";
import StakeholderRouter from "./Stakeholder.router";

const routers = (app: express.Application) => {
    const router = express.Router();
    app.use('', router);
    router.use("/stakeholder", StakeholderRouter);
}

export default routers;