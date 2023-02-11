import { StakeholderRepository } from "../domain/StakeholderRepository";
import { Stakeholder } from "../../../models/Stakeholder";

export class StakeholderUpdate {
    private _repository: StakeholderRepository;

    constructor(repository: StakeholderRepository) {
        this._repository = repository;
    }

    /**
     * COMENTARIOS PARA LA LOGICA DE ACTUALIZACION DE STAKEHOLDER
     * 
     * tengo 4 campos
     * id
     * name
     *          no debe estra vacio
     *          no debe repetirse
     * dni
     * ruc
     * 
     * dni y ruc no debe estar vacio
     * no se puede repetir dni o ruc disitinto de vacio
     *  no deben repetirse
     * 
     * type
     * no debe estar vacio
     */
    async update(objStakeholder: Stakeholder): Promise<Stakeholder> {
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
            let exist: boolean;
            objStakeholderFound = await this._repository.findByNombre(objStakeholder.name);
            if (objStakeholderFound.id == "") {
                exist = false;
            } else {
                exist = true;
            }
            if (exist && objStakeholder.id == objStakeholderFound.id) {
                const newError = new Error();
                newError.name = 'Nombre no válido';
                newError.message = 'El nombre es el mismo';
                throw newError;
            } else if (exist) {
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
            return this._repository.update(objStakeholder);
        }
    }
}