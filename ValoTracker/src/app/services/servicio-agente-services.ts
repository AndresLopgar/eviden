import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioAgenteService {

  constructor() { }

  muestraMensaje(mensaje:string) {
    alert(mensaje);
  }

}