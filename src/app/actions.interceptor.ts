import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ActionsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   if(request.url.includes(`/api/v1/wallet/walletId`)
   ||request.url.includes('api/v1//transaction')
   ||request.url.includes('/api/v1//transaction/create')
   || request.url.includes(`/api/v1//visa/addBalanceToWallet`)
   ||request.url.includes('api/v1//wallet/walletId')
   ||request.url.includes('api/v1/visa/refund'))
   
   {
    
    return next.handle(request)
   }
    const newRequest=request.clone({
    headers:request.headers.append('Authorization', "Bearer " +localStorage.getItem('token'))
   })
    return next.handle(newRequest);
  }
}
