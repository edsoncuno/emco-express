import { StakeholderRepository } from "../domain/StakeholderRepository";
import { Stakeholder } from "../../../models/Stakeholder";

export class StakeholderCreate {
    private _repository: StakeholderRepository;

    constructor(repository: StakeholderRepository) {
        this._repository = repository;
    }

    public async create(objStakeholder: Stakeholder): Promise<Stakeholder> {
        if (objStakeholder.name == "") {
            const newError = new Error();
            newError.name = 'Nombre no es válido';
            newError.message = 'El nombre es necesario';
            throw newError;
        } else if (objStakeholder.dni == "" && objStakeholder.ruc == "") {
            const newError = new Error();
            newError.name = 'Documento de identidad no es válido';
            newError.message = 'El documento de identidad es necesario';
            throw newError;
        } else if (objStakeholder.type == "") {
            const newError = new Error();
            newError.name = 'Tipo no es válido';
            newError.message = 'El tipo es necesario';
            throw newError;
        } else {
            let objStakeholderFound: Stakeholder;
            objStakeholderFound = await this._repository.findByNombre(objStakeholder.name);
            if (objStakeholderFound.name != "") {
                const newError = new Error();
                newError.name = 'Nombre no válido';
                newError.message = 'Un stakeholder con ese nombre ya existe';
                throw newError;
            }
            objStakeholderFound = await this._repository.findByDni(objStakeholder.dni);
            if (objStakeholderFound.dni != "") {
                const newError = new Error();
                newError.name = 'DNI no válido';
                newError.message = 'Un stakeholder con ese dni ya existe';
                throw newError;
            }
            objStakeholderFound = await this._repository.findByRuc(objStakeholder.ruc);
            if (objStakeholderFound.dni != "") {
                const newError = new Error();
                newError.name = 'RUC no válido';
                newError.message = 'Un stakeholder con ese ruc ya existe';
                throw newError;
            }
            return this._repository.add(objStakeholder);
        }
    }
}