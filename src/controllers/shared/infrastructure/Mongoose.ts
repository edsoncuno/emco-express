import { ORM } from '../application/ORM';
//import { connect } from 'mongoose';
//import { disconnect } from 'mongoose';
import config from "../../../config";

export class Mongoose implements ORM {
    connect: Function = () => { }
    disconnect: Function = () => { }

    async connectORM(): Promise<void> {
        try {
            await this.connect(String(config.EMCO_CONNECTION_STRING_MONGOOSE));
        } catch (error: any) {
            const newError = new Error();
            newError.name = 'Error de conecion';
            newError.message = 'No se pudo conectar a la base de datos';
            throw newError;
        }
    }

    async disconnectORM(): Promise<void> {
        try {
            await this.disconnect();
        } catch (error: any) {
            const newError = new Error();
            newError.name = 'Error de desconecion';
            newError.message = 'No se pudo desconectar de la base de datos';
            throw newError;
        }
    }
}