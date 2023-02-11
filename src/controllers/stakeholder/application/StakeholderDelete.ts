import { StakeholderRepository } from "../domain/StakeholderRepository";
import { Stakeholder } from "../../../models/Stakeholder";

export class StakeholderDelete {
    private _repository: StakeholderRepository;

    constructor(repository: StakeholderRepository) {
        this._repository = repository;
    }

    public async delete(objStakeholder: Stakeholder): Promise<Stakeholder> {
        return await this._repository.removeById(objStakeholder.id);
    }
}