import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
class UserToken {}
class Permissions {
  canActivate(): boolean {
    return true;
  }
}
@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
