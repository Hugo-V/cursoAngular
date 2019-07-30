import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/Shared/services/dataServices';
import { Router, ActivatedRoute } from '@angular/router';
import { IProyecto, Proyecto } from '../../Models/ProyectoType';

@Component({
  selector: 'app-proyecto-detalles',
  templateUrl: './proyecto-detalles.component.html',
  styleUrls: ['./proyecto-detalles.component.css']
})
export class ProyectoDetallesComponent implements OnInit {
  proyecto: FormGroup;
  nuevo: boolean;

  constructor(private _servicio: DataService, private fb: FormBuilder,
    private router: Router, private activeRoute: ActivatedRoute) {
    this.inicializarModelo(Proyecto.ProyectoVacio);
  }

  inicializarModelo(model: IProyecto) {
    this.proyecto = this.fb.group(model);
  }

  ngOnInit() {
    let id = +this.activeRoute.snapshot.queryParamMap.get('id');
    if (id) {
      this.nuevo = false;
      this._servicio.consultarProyectoPorId(id).subscribe((data: IProyecto) => this.inicializarModelo(data));
    } else {
      this.nuevo = true;
      this._servicio.consultarProyectos().subscribe((data) => this.proyecto.patchValue({ id: Math.max.apply(Math, data.map(x => x.id)) + 1 }))
    }
  }

  submit() {
    if (this.proyecto.valid) {
      alert('dato agregado');
      this._servicio.cambioProyecto(this.proyecto.value, this.nuevo).subscribe(
        (data) => {
          console.log(data);
          this.router.navigateByUrl("/proyectos/tabla");
        },
        (error) => {
          console.log(error)
        });
    } else {
      alert('formulario Invalido');
    }
  }
}
