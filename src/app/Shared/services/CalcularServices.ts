import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class CalcularService {

  Exponencial(intro: number): number {
    let retornado = intro * 10;
    return retornado;
  }

}
