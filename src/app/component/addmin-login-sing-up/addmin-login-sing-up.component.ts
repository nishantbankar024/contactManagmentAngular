import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { adminsignup } from 'src/app/contactmodule';

@Component({
  selector: 'app-addmin-login-sing-up',
  templateUrl: './addmin-login-sing-up.component.html',
  styleUrls: ['./addmin-login-sing-up.component.css']
})
export class AddminLoginSingUpComponent implements OnInit{
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router){}
  showlogin=true;
  signForm!:FormGroup;
  loginForm!:FormGroup;

  ngOnInit(): void {
   this.signForm=this.formBuilder.group({
name:['',Validators.required],
email:['',Validators.required],
password:['',Validators.required]
   })
   this.loginForm=this.formBuilder.group({
    email:['',Validators.required],
    password:['',Validators.required]
   })

  }

  signuphere(){
this.showlogin=false;
  }
  loginhere(){
    this.showlogin=true;
  }

  addminsignup(){
    this.http.post<adminsignup>('http://localhost:3000/adminsignup',this.signForm.value).subscribe(res=>{
      const user=res;
      if(res){
        alert("admin signup sucessfully :");
      }else{
        alert("tray again");
      }this.signForm.reset();
    },err=>{
      alert("something went wrong :");
      this.signForm.reset();
    }
    )
  }

  logingUser(){
this.http.get<adminsignup[]>('http://localhost:3000/adminsignup').subscribe(res=>{
 const user=res.find((a:any)=>{
  return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password;
 })
 if(user){
  this.router.navigate(["/admin-view"]);
alert("successfully login");
localStorage.setItem('adminlogin',JSON.stringify(user));

this.loginForm.reset();
 }else{
  alert("user not found :");
  this.loginForm.reset();
 }
},err=>{
  alert("try after sometime ");
  this.loginForm.reset();
})
  }

}
