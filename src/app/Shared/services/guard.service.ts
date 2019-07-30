import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{
  auth: boolean = false;
  private Authorization = new BehaviorSubject(this.auth);
  actualAuthorization = this.Authorization.asObservable();
  constructor(private router: Router) { }

  canActivate(): boolean {

    if (!this.Authorization.getValue()) {
      alert("inicie Secion para continuar");
      this.router.navigateByUrl('loggin');
    } 
    return this.Authorization.getValue()
    
  }

  completarAuthorizacion() {
    this.Authorization.next(true);
  }

  salir() {
    this.Authorization.next(false);
  }
}
