import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';



export const loginGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
  ): boolean | UrlTree => {
    const token = localStorage.getItem("token");
    const router = inject(Router);
    // console.log("Token : ",token)
    if(token){
      return true;
    }else {
      router.navigate(['login']);
      return false;
    }
};
