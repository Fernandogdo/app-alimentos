import { Injectable } from '@angular/core';
import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly URL = 'http://localhost:3000/api/login/';
  user:User[];
  
  constructor(private http: HttpClient) { }

  checkinformation(user: User) {
    return this.http.post<any>(this.URL, user );
  }
}
