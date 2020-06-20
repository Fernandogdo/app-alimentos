export class User {

    constructor(_id = '', nombre ='', apellido = '', email ='', username = '', password ='', isAdmin = false, isStaff = false){
        this._id = _id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.username = username;
        this.password = password;
        this.isAdmin = isAdmin;
        this.isStaff = isStaff;
       
    }
    _id?: string;
    nombre?: string;
    apellido?: string;
    email?: string;
    username?: string;
    password?: string;
    isAdmin?: Boolean;
    isStaff?: Boolean;
}
