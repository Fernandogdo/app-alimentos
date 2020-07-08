export class User {

    constructor(_id = '', name ='', lastname = '', email ='', username = '', password ='', isAdmin = false, isStaff = false, imagen=''){
        this._id = _id;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.username = username;
        this.password = password;
        this.isAdmin = isAdmin;
        this.isStaff = isStaff;
        this.imagen = imagen;
    }
    _id?: string;
    name?: string;
    lastname?: string;
    email?: string;
    username?: string;
    password?: string;
    isAdmin?: Boolean;
    isStaff?: Boolean;
    imagen?: string;
}
