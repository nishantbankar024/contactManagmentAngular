import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './component/contact-list/contact-list.component';
import { AddcontactComponent } from './component/addcontact/addcontact.component';
import { UpdateContactComponent } from './component/update-contact/update-contact.component';

import { LoginSignupComponent } from './component/login-signup/login-signup.component';
import { authGuard } from './shared/auth.guard';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { ServerErrorComponent } from './component/server-error/server-error.component';
import { AddminLoginSingUpComponent } from './component/addmin-login-sing-up/addmin-login-sing-up.component';
import { AdminViewComponent } from './component/admin-view/admin-view.component';

const routes: Routes = [
  {path:'contactlist',component:ContactListComponent},
  {path:'addcontact',component:AddcontactComponent},
  {path:'updatecontact/:id',component:UpdateContactComponent},
  {path:'addmin-loginSignUp',component:AddminLoginSingUpComponent},
  {path:'admin-view',component:AdminViewComponent},
  {path:'server-error',component:ServerErrorComponent},
  {path:'login-signup',component:LoginSignupComponent},
  {path:'',redirectTo:'login-signup',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
