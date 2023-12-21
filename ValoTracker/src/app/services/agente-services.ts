import { Injectable } from "@angular/core";
import { ServicioAgenteService } from "./servicio-agente-services";
import { dataServices } from "./data-services";
import { Agente } from "../agente.model";

@Injectable()
export class agenteService {

  constructor(private servicioVentanaEmergente:ServicioAgenteService, private dataService:dataServices) { }
  setAgentes(misAgentes:Agente[]){
    this.agentes=misAgentes;
  }

  obtenerAgentes(){
    return this.dataService.cargarAgentes();
  }

  agentes:Agente[]=[];

  agregarAgentesServicio(agente:Agente) {
    this.servicioVentanaEmergente.muestraMensaje("Nombre del agente: " + agente.nombre);
    this.agentes.push(agente);
    this.dataService.guardarAgentes(this.agentes);
  }
  
  encontrarAgente(indice:number){
    let agente:Agente=this.agentes[indice];
    return agente;
  }

  actualizarAgente(indice:number, agente:Agente){
    let agenteModificado=this.agentes[indice];

    agenteModificado.nombre=agente.nombre;
    agenteModificado.rol=agente.rol;
    agenteModificado.nacionalidad=agente.nacionalidad;

    this.dataService.actualizarAgente(indice,agente);
  }

  eliminaragente(indice:number){
    this.agentes.splice(indice,1);
    
    this.dataService.eliminarAgente(indice);

    this.dataService.guardarAgentes(this.agentes);
    
  }
}