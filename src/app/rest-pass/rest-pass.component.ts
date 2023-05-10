import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rest-pass',
  templateUrl: './rest-pass.component.html',
  styleUrls: ['./rest-pass.component.css']
})
export class RestPassComponent implements OnInit {


constructor(private AuthService:AuthService,private Router:Router){}

  resetPass:FormGroup=new FormGroup({
    newPassword:new FormControl(null,[Validators.required]),
    passwordRestVerified :new FormControl(null,[Validators.required])
  })

  sendData(resetPass:FormGroup)
  {
    const passConfirm=this.resetPass.get('passwordRestVerified')?.value
    const pass=this.resetPass.get('newPassword')?.value
    if(pass==passConfirm)
    {
      this.AuthService.resetPassword(this.resetPass.value).subscribe({
        next:(res)=>{
            if(res.message=='new password set successfully')
            {
              this.Router.navigate(['/login'])
            }else
            {
              console.log(res)
            }
        }
      })
    }

  }
  ngOnInit(): void {
    
  }
}
