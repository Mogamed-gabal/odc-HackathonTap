import { Component,OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-check-otp',
  templateUrl: './check-otp.component.html',
  styleUrls: ['./check-otp.component.css']
})
export class CheckOtpComponent implements OnInit {
  otp:any
  isLoading:Boolean=false
  err:Boolean=false
  errMessage:string=''
constructor(private AuthService:AuthService,private Router:Router){}
  
onOtpChange(val:any)
{
  this.otp=val
  console.log(this.otp)
}
  sendOtp()
  {
    const resetCode={
      resetCode:this.otp
    }
    this.isLoading=true
   
    this.AuthService.sendOtp(resetCode).subscribe({
     
      next:(res)=>{
        if(res.message==='verified successfully')
        {
          this.isLoading=false
          this.Router.navigate(['/restpass'])
        }else
        {
          this.isLoading=false
          this.err=true
          this.errMessage=res 
          console.log(this.errMessage)
          
        }
      }
    })
  }
  ngOnInit(): void {
    
  }
}
