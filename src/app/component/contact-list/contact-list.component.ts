import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { contact, contactus } from 'src/app/contactmodule';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{
  data:any|contact[]
  searchtext:any;
  contactusForm!:FormGroup;
  isloading=true;
  constructor(private api:ApiService,private formBuilder:FormBuilder){}
  ngOnInit(): void {
   this.getcontact();
   this.contactusForm=this.formBuilder.group({
    name:['',Validators.required],
    email:['',Validators.required],
    message:['',Validators.required]
   })
  }
getcontact(){
  return this.api.getContact().subscribe(res=>{
    this.data=res;
    this.isloading=false;
  })
}
deleteitem(id:number){
this.api.deletecontact(id).subscribe(res=>{
  alert("deleted successfully")
  this.getcontact();
})

}
logout(){
  localStorage.removeItem("logindata");
}

contactusSubmit(data:contactus){
this.api.contactus(data).subscribe(res=>{
  alert("submited");
  this.contactusForm.reset;
})

}
}
