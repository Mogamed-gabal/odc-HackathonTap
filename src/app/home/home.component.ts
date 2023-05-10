import { Component,OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow'
import { AuthService } from '../auth.service';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogin:Boolean=false
  decodedTokenn:any;
  userName:string=''
  constructor(private wowService: NgwWowService,private AuthService:AuthService,private Router:Router){
    this.wowService.init();

  }
  ngOnInit(): void {
    // display data or auth btn
    const token=localStorage.getItem('token')
   this.AuthService.userData.subscribe({
    next:()=>{
      if(this.AuthService.userData.getValue() !=null)
      {
        this.isLogin=true
         this.decodedTokenn=jwtDecode(JSON.stringify(token) )
         this.userName=this.decodedTokenn.name
      }else if(localStorage.getItem('token') !=null)
      {
      this.AuthService.sveUserData()
      }else if(this.AuthService.userData==null)
      {
        this.isLogin=false
      }
    }
   })
   
  }
  // allow user to dashboard
  checkToken()
  {
    const token=localStorage.getItem('token')
    if(token)
    {
      this.Router.navigate(['/userPage'])
    }else
    {
      alert('you have to login First')
      this.Router.navigate(['/login'])
    }
  }
}
