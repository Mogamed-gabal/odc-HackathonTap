import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomeComponent } from './home/home.component';

import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgrtPasswordComponent } from './forgrt-password/forgrt-password.component';
import { CheckOtpComponent } from './check-otp/check-otp.component';
import { RestPassComponent } from './rest-pass/rest-pass.component';
import { ChooseTypeComponent } from './choose-type/choose-type.component';
import { ChieldRegisterationComponent } from './chield-registeration/chield-registeration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymenMethodsComponent } from './paymen-methods/paymen-methods.component';
import { OverviewComponent } from './overview/overview.component';
import { ChildrensComponent } from './childrens/childrens.component';
import { HelpYouComponent } from './help-you/help-you.component';
import { DashboardGuard } from './dashboard.guard';
import { SuccessproccessComponent } from './successproccess/successproccess.component';

const routes: Routes = [
{path:'',redirectTo:'Home',pathMatch:'full',title:'Home'},
{path:'choose-type',component:ChooseTypeComponent,title:"choose"},
{path:'register',component:RegisterComponent,title:'Register'},
{path:'chieldRegisteration',component:ChieldRegisterationComponent,title:'chieldRegisteration'},
{path:'login',component:LoginComponent,title:'Login'},
{path:'getPass',component:ForgrtPasswordComponent,title:'GetPass'},
{path:'otp',component:CheckOtpComponent,title:'checkOtp'},
{path:'restpass',component:RestPassComponent,title:'resetPath'},
{path:'successproccess',component:SuccessproccessComponent,title:'successproccess'},
{path:'Home',component:HomeComponent,title:'Home'},
{path:'userPage',component:DashboardComponent,title:'userPage',children:[
  {path:'paymentMethods',component:PaymenMethodsComponent,title:'payment and Methods'},
  {path:'overview',component:OverviewComponent,title:'overview'},
  {path:'Childrensexpenses',component:ChildrensComponent,title:'Childrens expenses'},
  {path:'generateCard',component:HelpYouComponent,title:'generateCard'}

]},
{path:'**',component:NotFoundPageComponent,title:'notfoundPage'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
