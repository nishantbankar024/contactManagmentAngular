import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { contact } from 'src/app/contactmodule';


@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit{
  contactForm:FormGroup|any;

  constructor(private formBuilder:FormBuilder,private router:Router,private api:ApiService){}

  ngOnInit(): void {
this.contactForm=this.formBuilder.group({
  firstname:['',Validators.required],
  lastname:['',Validators.required],
  phonenumber:['',Validators.required],
  city:['',Validators.required]
})
  }
submitContact(data:contact){
// console.log(this.contactForm.value)
this.api.addContact(data).subscribe((res=>{
  this.contactForm.reset();
  this.router.navigate(["/contactlist"])
}))
 
}

  

}
