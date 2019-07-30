import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { IActividad, EActividad } from '../../Models/ActividadType';
import { MatTableDataSource } from '@angular/material';
import { DataService } from 'src/app/Shared/services/dataServices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-actividades',
  templateUrl: './tabla-actividades.component.html',
  styleUrls: ['./tabla-actividades.component.css']
})
export class TablaActividadesComponent implements OnInit, OnChanges {

  displayedColumns: string[] = [
    EActividad.nombre, EActividad.proyecto, EActividad.categoria, EActividad.horas, EActividad.costos
  ];
  Actividades: IActividad[];
  dataSource = new MatTableDataSource<IActividad>();
  @Input() actividadNueva: IActividad;
  @Output() evento: EventEmitter<IActividad> = new EventEmitter<IActividad>();

  constructor(private _dataService: DataService, private router: Router) { }

  ngOnInit() {
    //this._dataService.actividadesActuales.subscribe(data => {
    //  this.Actividades = data;
    //  this.dataSource = new MatTableDataSource<IActividad>(this.Actividades);
    //  this.evento.emit(data[data.lastIndexOf(this.actividadNueva)]);
    //});
    this._dataService.consultarActividades().subscribe((data: IActividad[]) => this.Actividades = data)
  }

  ngOnChanges(): void {
    if (this.actividadNueva) {
      this._dataService.agregarActivad(this.actividadNueva);
    }
  }
  navegarUrl(id: number) {
    this.router.navigate(["/actividades/detalles"], { queryParams: { id: id }, skipLocationChange: true });
  }
  borrar(id: number) {
    this._dataService.borrarActividad(id).subscribe((data) => { console.log(data) }, (error) => { console.log(error) });
    this.Actividades = this.Actividades.filter(x => x.id != id);
  }
}
