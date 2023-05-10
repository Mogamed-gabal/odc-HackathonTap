import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisaCardService  {

  constructor(private HttpClient:HttpClient) { }

  generateVisa(formData:object):Observable<any>
  {
    return this.HttpClient.post('https://tap-cash-ti5d.onrender.com/api/v1/visa/create',formData)
  }
  payeWithVisa(formData:object):Observable<any>
  {
    return this.HttpClient.post('https://tap-cash-ti5d.onrender.com/api/v1/visa/addBalanceToWallet',formData)
  }
  refundMony(formData:object):Observable<any>
  {     
    return this.HttpClient.put(`https://tap-cash-ti5d.onrender.com/api/v1/visa/refund`,formData)
  }
}
