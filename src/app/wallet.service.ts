import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private HttpClient:HttpClient) { }

  getUserWallet(walletId:any):Observable<any>
  {     
    return this.HttpClient.get(`https://tap-cash-ti5d.onrender.com/api/v1/wallet/${walletId}`)
  }
  getALL():Observable<any>
  {     
    return this.HttpClient.get(`https://tap-cash-ti5d.onrender.com/api/v1/transaction/getMyTransactions`)
  }
  UpdateBalance(formData:object,walletId:any):Observable<any>
  {     
    return this.HttpClient.put(`https://tap-cash-ti5d.onrender.com/api/v1/api/v1/wallet/${walletId}`,formData)
  }
  
 
}
