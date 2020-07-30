import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[];
  readonly URL = 'http://localhost:3000/api/users';
  
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.URL);
  }

  postUser(name: String, lastname: String, email: String, username: String,
     password: String, isAdmin:Boolean, isStaff:Boolean, upload: File) {
    
    var formData: any = new FormData();
    formData.append('name', name);
    formData.append('lastname', lastname);
    formData.append('email', email);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('isAdmin', isAdmin);
    formData.append('isStaff', isStaff);
    formData.append('upload', upload);

    return this.http.post(this.URL + '/', formData);

  }

  putUser(_id: String, name: String, lastname: String, email: String, username: String,
    password: String, isAdmin:Boolean, isStaff:Boolean, upload: File) {
      var formData: any = new FormData();
    formData.append('name', name);
    formData.append('lastname', lastname);
    formData.append('email', email);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('isAdmin', isAdmin);
    formData.append('isStaff', isStaff);
    formData.append('upload', upload);

    return this.http.put(this.URL + '/'+ _id , formData);
  } 

  deleteUser(_id: string) {
    return this.http.delete(this.URL + `/${_id}`);
  }

  getOneUser(_id: string) {
    return this.http.get(this.URL + `/${_id}`);
  }

  checkingaUser(_id: string) {
    return this.http.get(this.URL + `/check/${_id}`);
  }

}

