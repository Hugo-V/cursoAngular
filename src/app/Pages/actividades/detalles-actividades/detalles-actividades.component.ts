import { Component, OnInit } from '@angular/core';
import { IProyecto } from '../../Models/ProyectoType';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/Shared/services/dataServices';
import { ActivatedRoute, Router } from '@angular/router';
import { Actividad, IActividad } from '../../Models/ActividadType';

@Component({
  selector: 'app-detalles-actividades',
  templateUrl: './detalles-actividades.component.html',
  styleUrls: ['./detalles-actividades.component.css']
})
export class DetallesActividadesComponent implements OnInit {

  proyectos: IProyecto[];
  actividad: FormGroup;
  nuevo: boolean;
  constructor(private _servicio: DataService, private fb: FormBuilder,
    private router: Router, private activeRoute: ActivatedRoute) {
    this.inicializarModelo(Actividad.actividadVacia);
  }
  inicializarModelo(model: IActividad) {
    this.actividad = this.fb.group({
      id: [model.id],
      nombre: [model.nombre, Validators.required],
      proyecto: [null, Validators.required],
      categoria: [model.categoria, Validators.required],
      horas: [model.horas, (Validators.required, Validators.min(1), Validators.max(8))],
      costos: [model.costos]
    });

    /*this.actividad = this.fb.group(model);*/
  }
  ngOnInit() {
    let id = +this.activeRoute.snapshot.queryParamMap.get('id');
    //this._servicio.proyectosActuales.subscribe(data => {
    //  this.proyectos = data;
    //});
    this._servicio.consultarProyectos().subscribe((data: IProyecto[]) => this.proyectos = data);
    if (id) {
      //this._servicio.actividadesActuales.subscribe(data => {
      //  let actividad: IActividad = data.find(x => x.id == id);
      //  this.actividad.setValue(actividad);
      //});
      this.nuevo = false;
      this._servicio.consultarActivadPorId(id).subscribe((data: IActividad) => this.actividad.setValue(data));
    } else {
      this.nuevo = true;
      this._servicio.consultarActividades().subscribe((data) => this.actividad.patchValue({ id: Math.max.apply(Math, data.map(x => x.id)) + 1 }))
    }

  }
  submit() {
    if (this.actividad.valid) {
      alert('dato agregado');
      //this._servicio.agregarActivad(this.actividad.value);
      let actividad: IActividad = this.actividad.value
      this._servicio.cambioActividad(actividad, this.nuevo).subscribe(
        (data) => {
          console.log(data);
          this.router.navigateByUrl("/actividades/tabla");
        },
        (error) => {
          console.log(error)
        });
    } else {
      alert('formulario Invalido');
    }
  }
  compareFn: ((f1: any, f2: any) => boolean) | null = this.compareByValue;

  compareByValue(f1: IProyecto, f2: IProyecto) {
    return f1 && f2 && f1.id === f2.id;
  }
}
