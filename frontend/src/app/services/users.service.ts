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

  postUser(user: User) {
    return this.http.post(this.URL, user);
  }

  putUser(user: User) {
    return this.http.put(this.URL + `/${user._id}`, user);
  }

  deleteUser(_id: string) {
    return this.http.delete(this.URL + `/${_id}`);
  }

  getOneUser(_id: string) {
    return this.http.get(this.URL + `/${_id}`);
  }
}

