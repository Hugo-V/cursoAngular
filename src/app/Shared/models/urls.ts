import { HttpHeaders } from "@angular/common/http";

export enum Urls  {
  dominioApi = "http://localhost:3000",
  activiadades = "/actividades",
  proyectos = "/proyectos",
  usuarios ="/usuarios"
}
export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
