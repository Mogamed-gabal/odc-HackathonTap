import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private HttpClient:HttpClient) { }
  userData=new BehaviorSubject(null)
  sveUserData()
  {
    let encodedToken=JSON.stringify(localStorage.getItem('token')) 
    let decodedToken:any=jwtDecode(encodedToken)
    this.userData.next(decodedToken)
  }

  signUp(formData:object):Observable<any>
  {
    return this.HttpClient.post('https://tap-cash-ti5d.onrender.com/api/v1/auth/signup',formData)
  }
  signIn(formData:object):Observable<any>
  {
    return this.HttpClient.post('https://tap-cash-ti5d.onrender.com/api/v1/auth/login',formData)
  }
  checkExistingAccount(formData:object):Observable<any>
  {
    return this.HttpClient.post('https://tap-cash-ti5d.onrender.com/api/v1/auth/forgetPassword',formData)
  }
  sendOtp(formData:object):Observable<any>
  {
    return this.HttpClient.post('https://tap-cash-ti5d.onrender.com/api/v1/auth/verify',formData)
  }
 resetPassword(formData:object):Observable<any>
  {
    return this.HttpClient.put('https://tap-cash-ti5d.onrender.com/api/v1/auth/resetPassword',formData)
  }
}
