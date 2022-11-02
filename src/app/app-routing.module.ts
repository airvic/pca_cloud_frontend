import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpAndSupportComponent } from './help-and-support/help-and-support.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
   component:SignupComponent
  },  
  {
    path: 'uploads',
   component:UploadfileComponent
  },
  {
    path: 'dashboard/uploads',
   component:UploadfileComponent
  },
  {
    path: 'signup',
   component:SignupComponent
  },
  {
    path: 'login',
   component:LoginComponent
  }
  ,
  {
    path: 'dashboard',
   component:DashboardComponent
  },
  {
    path: 'help_and_support',
   component:HelpAndSupportComponent
  },  
  {
    path: 'dashboard/view',
   component:ViewComponent
  },
  {
    path: 'view',
   component:ViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
