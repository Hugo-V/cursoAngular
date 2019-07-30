import { Component, OnInit } from '@angular/core';
import { IProyecto } from '../../Models/ProyectoType';
import { DataService } from 'src/app/Shared/services/dataServices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyecto-tabla',
  templateUrl: './proyecto-tabla.component.html',
  styleUrls: ['./proyecto-tabla.component.css']
})
export class ProyectoTablaComponent implements OnInit {
  proyectos : IProyecto[]
  constructor(private _dataService: DataService, private router: Router) { }

  ngOnInit() {
    this._dataService.consultarProyectos().subscribe(x => this.proyectos = x);
  }
  navegarUrl(id: number) {
    this.router.navigate(["/proyectos/detalles"], { queryParams: { id: id }, skipLocationChange: true });
  }
  borrar(id: number) {
    this._dataService.borrarProyecto(id).subscribe((data) => { console.log(data) }, (error) => { console.log(error) });
    this.proyectos = this.proyectos.filter(x => x.id != id);
  }
}
