import { Request, Response, Router, NextFunction } from "express";
import { StakeholderRepository } from "../domain/StakeholderRepository";
import { StakerholderRead } from "../application/StakeholderRead";
import { StakeholderRepositorySequelize } from "./StakeholderRepositorySequelize";
import { Stakeholder } from "../../../models/Stakeholder";

export class StakeholderExpressGetAll {
    private _router: Router;
    private _repository: StakeholderRepository
    private _action: StakerholderRead;

    constructor(router: Router) {
        this._router = router;
        this._repository = new StakeholderRepositorySequelize();
        this._action = new StakerholderRead(this._repository);
    }

    public use(): void {
        this._router.get('/', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
            try {
                const result: Stakeholder[] = await this._action.getAll();
                const data: any[] = [];
                result.forEach((element: Stakeholder) => {
                    data.push(element.toJSON());
                })
                res.json(data);
            } catch (error: any) {
                res.status(400);
                let data: any = {};
                data.severity = 'error';
                data.summary = error.name;
                data.detail = error.message;
                res.json(data);
            }
        });
    }
}