export class SubcategoriaAlimento {
    constructor(_id = '', name ='', description = ''){
        this._id = _id;
        this.name = name;
    }
    _id?: string;
    name?: string;
}
