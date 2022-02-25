import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FAUser } from '../models/faSignup.interface';

@Injectable({
  providedIn: 'root'
})
export class FaSignupService {
selectedFAUser: FAUser = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  employeeID: "",
};

  constructor(private http: HttpClient) { }
  postUser(user: FAUser){
    return this.http.post("http://localhost:3000/FieldAgents",user);
  }
}
