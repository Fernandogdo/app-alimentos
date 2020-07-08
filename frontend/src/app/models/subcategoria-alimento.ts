export class SubcategoriaAlimento {
    constructor(_id = '', name ='', imagen = ''){
        this._id = _id;
        this.name = name;
        this.imagen = imagen
    }
    _id?: string;
    name?: string;
    categoria?:string;
    imagen?: string;
}
