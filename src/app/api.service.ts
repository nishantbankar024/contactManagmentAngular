import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contact, contactus } from './contactmodule';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addContact(data:contact){
    return this.http.post<contact>("http://localhost:3000/posts",data)

  }

  getContact(){
    return this.http.get<contact[]>("http://localhost:3000/posts")
  }

  deletecontact(id:number){
    return this.http.delete<contact>("http://localhost:3000/posts/"+id)
  }
  fetchdata(id:number){
    return this.http.get<contact>("http://localhost:3000/posts/"+id)
  }
  updatacontact(data:contact,id:number){
    return this.http.put<contact>("http://localhost:3000/posts/"+id,data)
  }

  contactus(data:contactus){
    return this.http.post<contactus>("http://localhost:3000/contact",data)
  }

  displaycontactus(){
    return this.http.get<contactus[]>("http://localhost:3000/contact")

  }
  deletequery(id:number){
    return this.http.delete<contactus>("http://localhost:3000/contact/"+id);
  }

}
