import { IProyecto } from "./ProyectoType";

export interface IActividad {
  id: number;
  nombre: string;
  proyecto: IProyecto;
  categoria: string;
  horas: number;
  costos: boolean;
}


export enum EActividad {
  nombre='nombre',
  proyecto='proyecto',
  categoria='categoria',
  horas='horas',
  costos='costos'
}

export class Actividad {

  constructor(public id: number,
    public nombre: string,
    public proyecto: IProyecto,
    public categoria: string,
    public horas: number,
    public costos: boolean,
  ) { }

  static get actividadVacia(): IActividad {
    return new ActividadNull();
  }
}

export class ActividadNull extends Actividad {

  constructor() {
    super(0, '', { id: 0, nombre: '' }, '', 0, false)
  }
}


