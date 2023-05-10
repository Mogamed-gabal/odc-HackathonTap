import { Component,OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private AuthService:AuthService,private Router:Router){}
  isLoading:Boolean=false
  err:Boolean=false
  errMessage:any
  token:any
  loginForm:FormGroup=new FormGroup({
    // phone:new FormControl(null,[Validators.required,Validators.pattern('^012[0-9]{8}$')]),
    ssid:new FormControl(null,[Validators.required,Validators.pattern('^[0-9]{14}$')]),
  password:new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z][0-9]{5,}$')])
  })
  sendData(loginForm:FormGroup)
  {
    this.isLoading=true
    this.AuthService.signIn(this.loginForm.value).subscribe({
      next:(res)=>{
      if(res.message==='Logged In')
        {
          localStorage.setItem('token',res.token)
          this.AuthService.sveUserData()
          this.Router.navigate(['/Home'])
          this.isLoading=false
          
         
       }else
        {
          this.err=true
          this.isLoading=false
         this.errMessage=res.message
        }
      }
    })
    console.log(loginForm.value)
  }
  ngOnInit(): void {
    
  }
}
