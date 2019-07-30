import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Shared/services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IUsuario, Usuario } from '../Pages/Models/UsuarioType';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {

  model = this.fb.group(Usuario.UsuarioVacio);

  constructor(private _auth: AuthService, private fb: FormBuilder) {
    
  }
 
  ngOnInit() {
  }

  loggin() {
    this._auth.loggin(this.model.value);
  }
}
