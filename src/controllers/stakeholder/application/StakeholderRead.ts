import { StakeholderRepository } from "../domain/StakeholderRepository";
import { Stakeholder } from "../../../models/Stakeholder";

export class StakerholderRead {
    private _repository: StakeholderRepository;

    constructor(repository: StakeholderRepository) {
        this._repository = repository;
    }

    public async getAll(): Promise<Stakeholder[]> {
        return await this._repository.getAll();
    }

    public async get(objStakeholder: Stakeholder): Promise<Stakeholder> {
        return await this._repository.findById(objStakeholder.id);
    }
}