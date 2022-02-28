import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DMUser } from '../models/daSignup.interface';

@Injectable({
  providedIn: 'root'
})
export class DmSignupService {
  selectedDMUser: DMUser = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    employeeID: '',
  };

  //noAuthHeader = { headers: new HttpHeaders({ NoAuth: 'True' }) };

  constructor(private http: HttpClient) {}
  postUser(user: DMUser) {
    return this.http.post('http://localhost:3000/DisasterManager', user
    //, this.noAuthHeader
    );
  }

  login(authCredentials) {
    return this.http.post(
      'http://localhost:3000/authenticateDM',
      authCredentials
      //,this.noAuthHeader
    );
  }

  getUserProfile() {
    return this.http.get('http://localhost:3000/userProfileDM');
  }

  //Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    } else return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload) return userPayload.exp > Date.now() / 1000;
    else return false;
  }
}
