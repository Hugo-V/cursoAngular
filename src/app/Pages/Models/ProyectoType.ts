export interface IProyecto {
  id: number;
  nombre: string;
}

export enum EAProyecto {
  nombre = 'nombre'
}

export class Proyecto {

  constructor(public id: number,
    public nombre: string
  ) { }

  static get ProyectoVacio(): IProyecto {
    return new ProyectoNull();
  }
}

export class ProyectoNull extends Proyecto {

  constructor() {
    super(0, '')
  }
}
