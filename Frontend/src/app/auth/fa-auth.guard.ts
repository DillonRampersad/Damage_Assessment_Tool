import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FaSignupService } from '../service/fa-signup.service';

@Injectable({
  providedIn: 'root',
})
export class FaAuthGuard implements CanActivate {
  constructor(
    private faSignUpService: FaSignupService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!this.faSignUpService.isLoggedIn()) {
        this.router.navigateByUrl('/fa-signin');
        this.faSignUpService.deleteToken();
        return false;
      }
    return true;
  }
}
