import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './component/contact-list/contact-list.component';
import { AddcontactComponent } from './component/addcontact/addcontact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateContactComponent } from './component/update-contact/update-contact.component';
import { FormsModule } from '@angular/forms';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { ServerErrorComponent } from './component/server-error/server-error.component';
import { FilterPipe } from './filter.pipe';
import { AddminLoginSingUpComponent } from './component/addmin-login-sing-up/addmin-login-sing-up.component';
import { AdminViewComponent } from './component/admin-view/admin-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    AddcontactComponent,
    UpdateContactComponent,
    LoginSignupComponent,
    PagenotfoundComponent,
    ServerErrorComponent,
    FilterPipe,
    AddminLoginSingUpComponent,
    AdminViewComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
