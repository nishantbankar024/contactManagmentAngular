import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { contact } from 'src/app/contactmodule';




@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit{
  public contactId!:number;
  public contactdata:contact={} as contact;
  constructor(private api:ApiService,private activatedrote:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
  this.activatedrote.params.subscribe((params:Params)=>{
this.contactId=params['id'];
  })
  this.api.fetchdata(this.contactId).subscribe((data:contact)=>{
this.contactdata=data;
// console.log(data);
  })
  }

  update(){
  this.api.updatacontact(this.contactdata,this.contactId).subscribe((res:contact)=>{
    alert("data updated successfully")
    this.router.navigate(['/contactlist'])
  })
  }

}
