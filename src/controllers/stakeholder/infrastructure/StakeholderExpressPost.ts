import { Request, Response, Router, NextFunction } from "express";
import { StakeholderRepository } from "../domain/StakeholderRepository";
import { StakeholderRepositorySequelize } from "./StakeholderRepositorySequelize";
import { StakeholderCreate } from "../application/StakeholderCreate";
import { Stakeholder } from "../../../models/Stakeholder";

export class StakeholderExpressPost {
    private _router: Router;
    private _repository: StakeholderRepository;
    private _action: StakeholderCreate;

    constructor(router: Router) {
        this._router = router;
        this._repository = new StakeholderRepositorySequelize();
        this._action = new StakeholderCreate(this._repository);
    }

    public use(): void {
        this._router.post('/', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
            try {
                const newStakeholder: Stakeholder = new Stakeholder({
                    name: req.body.name,
                    dni: req.body.dni,
                    ruc: req.body.ruc,
                    type: req.body.type,
                });
                await this._action.create(newStakeholder);
                let data: any = {};
                data.error = false;
                data.type = 'success';
                data.title = 'Éxito'
                data.message = 'Se creó un nuevo stakeholder exitosamente';
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