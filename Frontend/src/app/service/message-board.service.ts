import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { Message } from '../models/messages.interface';
import { WebRequestService } from './web-request.service';


@Injectable({
  providedIn: 'root'
})
export class MessageBoardService {
  
  
  constructor(private http: HttpClient) { }

  getMessage() {
    return this.http.get<any>("http://localhost:3000/Messages")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getOneMessage(id: string) {
    return this.http.get<any>("http://localhost:3000/Messages/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

 


  postMessage(data: any){
    return this.http.post<any>("http://localhost:3000/Messages", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateMessage(data: any, id: string){
    return this.http.patch<any>("http://localhost:3000/Messages/"+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteMessage(id: string){
    return this.http.delete<any>("http://localhost:3000/Messages/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}

let headers = new Headers();
headers.append('Content-Type', 'application/json');