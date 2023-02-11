import { Stakeholder } from "../../../models/Stakeholder";

export interface StakeholderRepository {
    getAll(): Promise<Stakeholder[]>;
    add(objStakeholder: Stakeholder): Promise<Stakeholder>;
    removeById(id: string): Promise<Stakeholder>;
    update(objStakeholder: Stakeholder): Promise<Stakeholder>;
    findByNombre(name: string): Promise<Stakeholder>;
    findByDni(dni: string): Promise<Stakeholder>;
    findByRuc(ruc: string): Promise<Stakeholder>;
    findById(id: string): Promise<Stakeholder>;
}