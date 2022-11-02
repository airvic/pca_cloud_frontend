import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, retry } from 'rxjs';
import { Router } from '@angular/router';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  Storetoken(username:any,token:any,gmail:any,image:any,){
   localStorage.setItem('PCA_CLOUD_TOKEN',token)
   localStorage.setItem('USER',username)
   localStorage.setItem('GMAIL',gmail)
   localStorage.setItem('IMAGE',image)
   this.router.navigate(['dashboard'])
  }

 isloggin(){
  const token = localStorage.getItem('PCA_CLOUD_TOKEN')
  if(token){
    return true
  }
  else{
    this.router.navigate(['login'])
    return false
  }
 }

 logout(){
  localStorage.clear()
  this.router.navigate(['login'])
 }

}
