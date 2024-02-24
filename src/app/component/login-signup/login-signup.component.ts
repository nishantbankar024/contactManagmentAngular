import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { login, signup } from 'src/app/contactmodule';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  signupform!: FormGroup;
  loginform!: FormGroup;

  ngOnInit(): void {
    this.signupform = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })


    this.loginform = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  isshow = false;

  singUp() {
    this.isshow = true;
  }

  login() {
    this.isshow = false;
  }

  submitSingup() {
    this.http.post<signup>("http://localhost:3000/signup", this.signupform.value).subscribe(res => {
      alert("user registered successfully")
      this.signupform.reset();
    })



  }

  userlogin() {
    this.http.get<login[]>("http://localhost:3000/signup").subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.loginform.value.email && a.password === this.loginform.value.password;
      })
      if (user) {
        alert("user login suceesfully")
        this.router.navigate(["/contactlist"]);
        this.loginform.reset();
       
        // stire data localstorage//
        localStorage.setItem('logindata', JSON.stringify(user))
        localStorage.removeItem("logindata");
      }
      else {
        alert("user name or password invalid ");
        this.loginform.reset();
        this.router.navigate(["/server-error"]);
      }
      

    }),(err: any)=>{
      this.loginform.reset();
      this.router.navigate(["/server-error"]);
    }
  }


}
