import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgrt-password',
  templateUrl: './forgrt-password.component.html',
  styleUrls: ['./forgrt-password.component.css']
})
export class ForgrtPasswordComponent implements OnInit{
  constructor(private AuthService:AuthService,private Router:Router){}
  errMessage:string=''
  err:Boolean=false
  isLoading:Boolean=false
emilForm:FormGroup=new FormGroup
(
  {email:new FormControl(null,[Validators.required,Validators.email])
  }  
)
sendEmail(emailForm:FormGroup)
{
  this.isLoading=true
  this.AuthService.checkExistingAccount(this.emilForm.value).subscribe({
    next:(res)=>{
        if(res.message=='reset code sent to email')
        {
          console.log=(emailForm.value)
          this.isLoading=false
          this.Router.navigate(['/otp'])
        }else
        {
          this.isLoading=false
          this.errMessage=res
        }
    }
  })
}

  ngOnInit(): void {
    
  }
}
