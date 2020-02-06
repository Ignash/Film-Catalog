import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://localhost:3000/user';

  constructor(private http: HttpClient) {  }

  registrationUser(user: User){
    return this.http.post(`${this.url + '/registration'}`, user)
  }
}
