import { Component,OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-chield-registeration',
  templateUrl: './chield-registeration.component.html',
  styleUrls: ['./chield-registeration.component.css']
})
export class ChieldRegisterationComponent implements OnInit {
  err:Boolean=false
  isLoading:Boolean=false
  token:any
  isError:Boolean=false
errMessage:string=''
validId:Boolean=false
parentMessage:string=''
nationalMessage:string=''
  constructor( private AuthService:AuthService,private Router:Router
){}
registerForm:FormGroup=new FormGroup({
  name:new FormControl(null,[Validators.minLength(6), Validators.maxLength(25), Validators.required]),
  ssid:new FormControl(null,[Validators.required,Validators.pattern('^[0-9]{14}$')]),
  parent:new FormControl(null,[Validators.required,Validators.pattern('^[0-9]{14}$')]),
  phone:new FormControl(null,[Validators.required,Validators.pattern('^012[0-9]{8}$')]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required]),
  confirmPassword:new FormControl(null,[Validators.required])

})
sendData(registerForm:FormGroup)
{
  this.isLoading=true
  this.registerForm.get('role')?.setValue('child')
    console.log(this.registerForm.value)
  this.isLoading=true
  if(registerForm.valid)
  {
    this.AuthService.signUp(this.registerForm.value).subscribe({
      next:(responce)=>{
        
        if(responce.message=='registered successfully') {
          console.log(responce.message)
          localStorage.setItem('token',responce.token)
          this.isLoading=false
          this.Router.navigate(['/login'])
        
        } else
        {
          this.isLoading=false
         this.errMessage=responce.message
        }
       
      }
    
    })
  }

}
  ngOnInit(): void {
    
  }
}
