import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MOCUser } from '../models/mocSignup.interface';

@Injectable({
  providedIn: 'root'
})
export class MocSignupService {
  selectedMOCUser: MOCUser = {
    username: '',
    email: '',
    password: '',
  };

  //noAuthHeader = { headers: new HttpHeaders({ NoAuth: 'True' }) };

  constructor(private http: HttpClient) {}
  postUser(user: MOCUser) {
    return this.http.post('http://localhost:3000/MembersOfCommunities', user
    //, this.noAuthHeader
    );
  }

  login(authCredentials) {
    return this.http.post(
      'http://localhost:3000/authenticateMOC',
      authCredentials
      //,this.noAuthHeader
    );
  }

  getUserProfile() {
    return this.http.get('http://localhost:3000/userProfileMOC');
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


