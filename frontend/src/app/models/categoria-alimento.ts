export class CategoriaAlimento {

    constructor(_id = '', name ='', description = '', imagen = ''){
        this._id = _id;
        this.name = name;
        this.description = description;
        this.imagen = imagen;
    }
    _id?: string;
    name?: string;
    description?: string;
    imagen?: string
}
