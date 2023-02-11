export class Stakeholder {
    private _id: string = '';
    private _name: string = '';
    private _dni: string = '';
    private _ruc: string = '';
    private _type: string = '';

    constructor({ id, name, dni, ruc, type }: { id?: string, name?: string, dni?: string, ruc?: string, type?: string }) {
        if (id) {
            this._id = id;
        }
        if (name) {
            this._name = name;
        }
        if (dni) {
            this._dni = dni;
        }
        if (ruc) {
            this._ruc = ruc;
        }
        if (type) {
            this._type = type;
        }
    }

    get id(): string {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get dni(): string {
        return this._dni;
    }

    set dni(value) {
        this._dni = value;
    }

    get ruc(): string {
        return this._ruc;
    }

    set ruc(value) {
        this._ruc = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    public toJSON(): any {
        let data: any = {};
        if (this._id !== "") {
            data.id = this._id;
        }
        if (this._name !== "") {
            data.name = this._name;
        }
        if (this._ruc !== "") {
            data.ruc = Number(this._ruc);
        }
        if (this._dni !== "") {
            data.dni = Number(this._dni);
        }
        if (this._type !== "") {
            data.type = this._type;
        }
        return data;
    }

    public toJsonWithoutId(): any {
        let data: any = {};
        if (this._name !== "") {
            data.name = this._name;
        }
        if (this._ruc !== "") {
            data.ruc = Number(this._ruc);
        }
        if (this._dni !== "") {
            data.dni = Number(this._dni);
        }
        if (this._type !== "") {
            data.type = this._type;
        }
        return data;
    }

    public toJSONUnclean(): any {
        let data: any = {};
        data.name = this._name;
        if (this._ruc !== "") {
            data.ruc = Number(this._ruc);
        }
        if (this._dni !== "") {
            data.dni = Number(this._dni);
        }
        data.type = this._type;
        return data;
    }
}