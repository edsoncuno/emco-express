import { Request, Response, Router, NextFunction } from "express";
import { StakeholderRepository } from "../domain/StakeholderRepository";
import { StakeholderDelete } from "../application/StakeholderDelete";
import { StakeholderRepositorySequelize } from "./StakeholderRepositorySequelize";
import { Stakeholder } from "../../../models/Stakeholder";

export class StakeholderExpressDelete {
    private _router: Router;
    private _repository: StakeholderRepository;
    private _action: StakeholderDelete;

    constructor(router: Router) {
        this._router = router;
        this._repository = new StakeholderRepositorySequelize();
        this._action = new StakeholderDelete(this._repository);
    }

    public use(): void {
        this._router.delete('/:id', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
            try {
                const newStakeholder: Stakeholder = new Stakeholder({ id: req.params.id });
                await this._action.delete(newStakeholder);
                res.status(200);
                let data: any = {};
                data.type = 'success';
                data.title = 'Éxito'
                data.message = 'Se eliminó el stakeholder exitosamente';
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