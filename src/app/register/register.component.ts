import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  err:Boolean=false
  isLoading:Boolean=false
  token:any
  isError:Boolean=false
errMessage:any=''  
errConfirm:string=''
isNotConfirm:Boolean=false

  constructor( private AuthService:AuthService,private Router:Router
){}
registerForm:FormGroup=new FormGroup({
  name:new FormControl(null,[Validators.minLength(6), Validators.maxLength(25), Validators.required]),
  ssid:new FormControl(null,[Validators.required,Validators.pattern('^[0-9]{14}$')]),
  phone:new FormControl(null,[Validators.required,Validators.pattern('^012[0-9]{8}$')]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required, Validators.pattern('^[A-Z][a-z][0-9]{5,}$')]),
  confirmPassword:new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z][0-9]{5,}$')])

})
sendData(registerForm:FormGroup)
{
  this.isLoading=true
  console.log(this.registerForm.value)
  this.isLoading=true
  if(registerForm.valid)
  {
    this.AuthService.signUp(this.registerForm.value).subscribe({
      next:(responce)=>{
        
        if(responce.message=='registered successfully') {
          console.log(responce.message)
          this.isLoading=false
          this.Router.navigate(['/login'])
        
        } else
        {
          this.isError=true
          this.isLoading=false
         this.errMessage=responce.message
         console.log(this.errMessage)
        }
       
      }
    
    })
  }

}
  ngOnInit(): void {
    
  }
}
