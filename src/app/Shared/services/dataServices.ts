import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IActividad } from "src/app/Pages/Models/ActividadType";
import { HttpClient } from '@angular/common/http';
import { Urls, httpOptions } from "../models/urls";
import { IProyecto } from "src/app/Pages/Models/ProyectoType";

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) { }
  /*;*/
  actividades: IActividad[] = [
    { id: 1, nombre: 'clases nuevas', proyecto: { id: 1, nombre: 'inovacion' }, categoria: 'codigo', horas: 8, costos: false },
    { id: 2, nombre: 'mas casos de uso', proyecto: { id: 2, nombre: 'Pharmacy' }, categoria: 'analisis', horas: 7, costos: false },
    { id: 3, nombre: 'edicion de procesos', proyecto: { id: 3, nombre: 'Mantenimiento' }, categoria: 'codigo', horas: 5, costos: false },
    { id: 4, nombre: 'nuevas pantallas', proyecto: { id: 4, nombre: 'Famsa' }, categoria: 'requerimientos', horas: 6, costos: true },
    { id: 5, nombre: 'decidir sobre que hacer', proyecto: { id: 5, nombre: 'Sima' }, categoria: 'juntas', horas: 8, costos: false },
    { id: 6, nombre: 'clases angular', proyecto: { id: 1, nombre: 'inovacion' }, categoria: 'capacitaciones', horas: 8, costos: false },
    { id: 7, nombre: 'nueva tecnologia', proyecto: { id: 1, nombre: 'inovacion' }, categoria: 'analisis', horas: 8, costos: false }
  ];
  private act = new BehaviorSubject(this.actividades);
  actividadesActuales = this.act.asObservable();
  /*;*/
  proyectos: IProyecto[] = [
    { id: 1, nombre: 'inovacion' },
    { id: 2, nombre: 'Pharmacy' },
    { id: 3, nombre: 'Mantenimiento' },
    { id: 4, nombre: 'Famsa' },
    { id: 5, nombre: 'Sima' }
  ];
  private pro = new BehaviorSubject(this.proyectos);
  proyectosActuales = this.pro.asObservable();

  agregarActivad(actividad: IActividad) {
    let actividades = this.actividades;
    if (actividad.id == 0) {
      actividad.id = Math.max.apply(Math, this.act.subscribe(x => { return x.map(x => x.id); }));
      actividad.id = actividad.id + 1;
      actividades.push(actividad);
    } else {
      let index = actividades.findIndex(x => x.id == actividad.id);
      actividades[index] = actividad;
    }
    this.act.next(actividades);
  }

  agregarProyecto(proyectoNuevo: IProyecto) {
    let proyectos = this.proyectos;
    proyectos.push(proyectoNuevo);
    this.pro.next(proyectos);
  }
  //metodos http
  consultarActividades(): Observable<IActividad[]> {
    return this.http.get<IActividad[]>(Urls.dominioApi + Urls.activiadades);
  }
  consultarProyectos(): Observable<IProyecto[]> {
    return this.http.get<IProyecto[]>(Urls.dominioApi + Urls.proyectos);
  }
  consultarActivadPorId(id: number): Observable<IActividad> {
    return this.http.get<IActividad>(Urls.dominioApi + Urls.activiadades + '/' + id.toString());
  }
  consultarProyectoPorId(id: number): Observable<IProyecto> {
    return this.http.get<IProyecto>(Urls.dominioApi + Urls.proyectos + '/' + id.toString());
  }
  cambioActividad(actividad: IActividad, nuevo: boolean): Observable<IActividad> {
    if (nuevo) {
      return this.http.post<IActividad>(Urls.dominioApi + Urls.activiadades, actividad, httpOptions);
    } else {
      return this.http.put<IActividad>(Urls.dominioApi + Urls.activiadades +'/'+ actividad.id, actividad, httpOptions);
    }
  }
  cambioProyecto(proyecto: IProyecto, nuevo: boolean): Observable<IProyecto> {
    if (nuevo) {
      return this.http.post<IProyecto>(Urls.dominioApi + Urls.proyectos, proyecto, httpOptions);
    } else {
      return this.http.put<IProyecto>(Urls.dominioApi + Urls.proyectos + '/' + proyecto.id, proyecto, httpOptions);
    }
  }
  borrarActividad(id: number): Observable<IActividad> {
    return this.http.delete<IActividad>(Urls.dominioApi + Urls.activiadades + '/' + id, httpOptions);
  }
  borrarProyecto(id: number): Observable<IProyecto> {
    return this.http.delete<IProyecto>(Urls.dominioApi + Urls.proyectos + '/' + id, httpOptions);
  }
}
