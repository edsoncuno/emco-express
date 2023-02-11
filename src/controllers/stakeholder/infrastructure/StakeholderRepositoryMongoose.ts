import { StakeholderRepository } from "../domain/StakeholderRepository";
import { Mongoose } from "../../shared/infrastructure/Mongoose";
import { StakeholderModelMongoose } from "./StakeholderModelMongoose";
import { Stakeholder } from "../../../models/Stakeholder";

export class StakeholderRepositoryMongoose implements StakeholderRepository {
    private _db: Mongoose;

    constructor() {
        this._db = new Mongoose();
    }

    async getAll(): Promise<Stakeholder[]> {
        await this._db.connectORM();
        const result = await StakeholderModelMongoose.find({});
        await this._db.disconnectORM();
        const list: Stakeholder[] = [];
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
        try {
            const newStakeholder = new StakeholderModelMongoose(objStakeholder.toJsonWithoutId());
            await this._db.connectORM();
            const result: any = await newStakeholder.save();
            await this._db.disconnectORM();
            return new Stakeholder({
                id: result.id,
                name: result.name,
                dni: result.dni,
                ruc: result.ruc,
                type: result.type,
            });
        }
        catch (error) {
            await this._db.disconnectORM();
            return new Stakeholder({});
        }
    }
    async removeById(_id: string): Promise<Stakeholder> {
        try {
            await this._db.connectORM();
            const result: any = await StakeholderModelMongoose.findByIdAndDelete(_id);
            await this._db.disconnectORM();
            return new Stakeholder(result);
        }
        catch (error) {
            await this._db.disconnectORM();
            return new Stakeholder({});
        }
    }
    update(objStakeholder: Stakeholder): Promise<Stakeholder> {
        throw new Error("Method not implemented.");
    }
    async findByNombre(nombre: string): Promise<Stakeholder> {
        try {
            await this._db.connectORM();
            const result: any = await StakeholderModelMongoose.findOne({ nombre: nombre });
            await this._db.disconnectORM();
            return new Stakeholder(result);
        }
        catch (error) {
            await this._db.disconnectORM();
            return new Stakeholder({});
        }
    }
    async findByDni(dni: string): Promise<Stakeholder> {
        try {
            await this._db.connectORM();
            const result: any = await StakeholderModelMongoose.findOne({ dni: dni });
            await this._db.disconnectORM();
            return new Stakeholder(result);
        }
        catch (error) {
            await this._db.disconnectORM();
            return new Stakeholder({});
        }
    }
    async findByRuc(ruc: string): Promise<Stakeholder> {
        try {
            await this._db.connectORM();
            const result: any = await StakeholderModelMongoose.findOne({ ruc: ruc });
            await this._db.disconnectORM();
            return new Stakeholder(result);
        }
        catch (error) {
            await this._db.disconnectORM();
            return new Stakeholder({});
        }
    }
    async findById(_id: string): Promise<Stakeholder> {
        try {
            await this._db.connectORM();
            const result: any = await StakeholderModelMongoose.findById(_id);
            await this._db.disconnectORM();
            return new Stakeholder(result);
        }
        catch (error) {
            await this._db.disconnectORM();
            return new Stakeholder({});
        }
    }

}