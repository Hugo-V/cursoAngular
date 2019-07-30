import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { IUsuario, Usuario } from 'src/app/Pages/Models/UsuarioType';
import { Urls, httpOptions } from '../models/urls';
import { Router } from '@angular/router';
import { GuardService } from './guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user: IUsuario = Usuario.UsuarioVacio;
  private User = new BehaviorSubject(this.user);
  actualUser = this.User.asObservable();

  constructor(private http: HttpClient, private router: Router, private guard: GuardService) { }
  
  loggin(u: IUsuario){
    this.http.get<IUsuario[]>(Urls.dominioApi + Urls.usuarios, httpOptions).subscribe((data: IUsuario[]) => {
      let usuario = data.find(x => x.nombre == u.nombre && x.password == u.password);
      if (usuario) {
        this.guard.completarAuthorizacion();
        this.User.next(usuario);
        this.router.navigateByUrl('/Inicio');
      } else {
        alert("usuario Invalido");
      }
    })
  }
}
