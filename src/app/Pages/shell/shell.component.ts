import { Component, OnInit } from '@angular/core';
import { IActividad } from '../Models/ActividadType';
import { DataService } from 'src/app/Shared/services/dataServices';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {
  ngOnInit(): void {
    //this._dataService.cargaInicial();
    }

  //propiedades 
  title = 'Sima';
  bandera: boolean = true;
  width: number = 150;
  arrayObject: { posicion: number, texto: string }[] = [
    { posicion: 1, texto: 'posicion 1' },
    { posicion: 2, texto: 'posicion 2' },
    { posicion: 3, texto: 'posicion 3' },
    { posicion: 4, texto: 'posicion 4' },
    { posicion: 5, texto: 'posicion 5' }];
  actividadNueva: IActividad;
  //constructor
  constructor(private _dataService: DataService) { }

  //metodo publicos
  desaparecer() {
    //console.log(event);
    this.bandera = !this.bandera;
    //this.width = this.width + 50;
    //this.actividadNueva = {
    //  proyecto: { id: 1, nombre: 'inovacion' },
    //  categoria: 'Analisis',
    //  costos: false,
    //  horas: 8
    //};
  }
  recargar(evento: IActividad) {
    console.log(evento);
  }

}
