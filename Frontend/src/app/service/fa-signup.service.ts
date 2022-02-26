import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FAUser } from '../models/faSignup.interface';

@Injectable({
  providedIn: 'root',
})
export class FaSignupService {
  selectedFAUser: FAUser = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    employeeID: '',
  };

  //noAuthHeader = { headers: new HttpHeaders({ NoAuth: 'True' }) };

  constructor(private http: HttpClient) {}
  postUser(user: FAUser) {
    return this.http.post('http://localhost:3000/FieldAgents', user
    //, this.noAuthHeader
    );
  }

  login(authCredentials) {
    return this.http.post(
      'http://localhost:3000/authenticate',
      authCredentials
      //,this.noAuthHeader
    );
  }

  getUserProfile() {
    return this.http.get('http://localhost:3000/userProfile');
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
