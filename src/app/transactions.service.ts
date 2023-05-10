import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private HttpClient:HttpClient) { }

  makeTransaction(formdata:object):Observable<any>
  {
    return this.HttpClient.post(`https://tap-cash-ti5d.onrender.com/api/v1/transaction/create`,formdata)
  }
}
