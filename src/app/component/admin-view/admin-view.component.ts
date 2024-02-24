import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { contactus } from 'src/app/contactmodule';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit{
  data!:contactus[];
  constructor(private api:ApiService){}
  ngOnInit(): void {
    localStorage.removeItem("logindata");
    this.showcontains();
  }
showcontains(){
  this.api.displaycontactus().subscribe(res=>{
    this.data=res;
    console.log(res);
  })

 
}

deleted(id:number){
this.api.deletequery(id).subscribe(res=>{
    alert("contact has been deleted :");
    this.showcontains();
    })
}

logout(){
  localStorage.removeItem('adminlogin');
}
}
