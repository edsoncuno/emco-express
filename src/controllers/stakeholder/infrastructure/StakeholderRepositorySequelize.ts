import { Stakeholder } from '../../../models/Stakeholder';
import { StakeholderRepository } from '../domain/StakeholderRepository';
import { StakeholderModelSequelize } from './StakeholderModelSequelize';

export class StakeholderRepositorySequelize implements StakeholderRepository {
    async getAll(): Promise<Stakeholder[]> {
        let result: any = await StakeholderModelSequelize.findAll();
        let list: Stakeholder[] = [];
        result.forEach((element: any) => {
            list.push(new Stakeholder({
                id: element.id,
                name: element.name,
                ruc: element.ruc,
                dni: element.dni,
                type: element.type
            }));
        });
        return list;
    }
    async add(objStakeholder: Stakeholder): Promise<Stakeholder> {
        let result: any = await StakeholderModelSequelize.create(objStakeholder.toJsonWithoutId());
        return new Stakeholder(result.dataValues);
    }
    async removeById(id: string): Promise<Stakeholder> {
        let founded: Stakeholder = await this.findById(id);
        if (founded.id !== '') {
            await StakeholderModelSequelize.destroy({ where: { id: Number(id) } });
            // retorna un numero con la cantidad de rows eliminadas
        }
        return founded;
    }
    async update(objStakeholder: Stakeholder): Promise<Stakeholder> {
        return new Stakeholder({});
    }
    async findByNombre(name: string): Promise<Stakeholder> {
        let result: any[] = await StakeholderModelSequelize.findAll({ where: { name: name } });
        if (result.length == 0) {
            return new Stakeholder({});
        } else {
            return new Stakeholder(result[0].dataValues);
        }
    }
    async findByDni(dni: string): Promise<Stakeholder> {
        let result: any = await StakeholderModelSequelize.findAll({ where: { dni: Number(dni) } });
        if (result.length == 0) {
            return new Stakeholder({});
        } else {
            return new Stakeholder(result[0].dataValues);
        }
    }
    async findByRuc(ruc: string): Promise<Stakeholder> {
        let result: any = await StakeholderModelSequelize.findAll({ where: { ruc: Number(ruc) } });
        if (result.length == 0) {
            return new Stakeholder({});
        } else {
            return new Stakeholder(result[0].dataValues);
        }
    }
    async findById(id: string): Promise<Stakeholder> {
        let result: any = await StakeholderModelSequelize.findAll({ where: { id: Number(id) } });
        if (result.length == 0) {
            return new Stakeholder({});
        } else {
            return new Stakeholder(result[0].dataValues);
        }
    }

}