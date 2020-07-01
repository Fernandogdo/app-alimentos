export class CategoriaAlimento {

    constructor(_id = '', name ='', description = '', img = ''){
        this._id = _id;
        this.name = name;
        this.description = description;
        this.img = img;
    }
    _id?: string;
    name?: string;
    description?: string;
    img?: string
}
