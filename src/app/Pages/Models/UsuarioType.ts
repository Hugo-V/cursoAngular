export interface IUsuario {
  id: number;
  nombre: string;
  password: string;
}

export enum EUsuario {
  nombre = 'nombre',
  password ='password'
}

export class Usuario {

  constructor(public id: number,
    public nombre: string, public password: string
  ) { }

  static get UsuarioVacio(): IUsuario {
    return new UsuarioNull();
  }
}

export class UsuarioNull extends Usuario {

  constructor() {
    super(0, '','')
  }
}
