import { CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgwWowModule } from 'ngx-wow';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ForgrtPasswordComponent } from './forgrt-password/forgrt-password.component';
import { CheckOtpComponent } from './check-otp/check-otp.component';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { RestPassComponent } from './rest-pass/rest-pass.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { ChooseTypeComponent } from './choose-type/choose-type.component';
import { ChieldRegisterationComponent } from './chield-registeration/chield-registeration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymenMethodsComponent } from './paymen-methods/paymen-methods.component';
import { OverviewComponent } from './overview/overview.component';
import { ChildrensComponent } from './childrens/childrens.component';
import { HelpYouComponent } from './help-you/help-you.component';
import { ActionsInterceptor } from './actions.interceptor';
import { SuccessproccessComponent } from './successproccess/successproccess.component';
import { UserGuard } from './user.guard';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ForgrtPasswordComponent,
    CheckOtpComponent,
    RestPassComponent,
    ChooseTypeComponent,
    ChieldRegisterationComponent,
    DashboardComponent,
    PaymenMethodsComponent,
    OverviewComponent,
    ChildrensComponent,
    HelpYouComponent,
    SuccessproccessComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgwWowModule,
    HttpClientModule,
    NgxOtpInputModule,
    NgOtpInputModule,
  ],
  providers: [
    UserGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ActionsInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
