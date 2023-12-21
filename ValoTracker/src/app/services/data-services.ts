import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { loginService } from "./login-service";
import { Agente } from "../agente.model";

@Injectable()
export class dataServices{

    constructor(private httpClient:HttpClient,private loginService:loginService){}

    cargarAgentes(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://valotracker-dd07f-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth=' + token);
    }

    guardarAgentes(agentes:Agente[]){
        this.httpClient.put('https://valotracker-dd07f-default-rtdb.europe-west1.firebasedatabase.app/datos.json',agentes).subscribe(
            response=>console.log("se han guardado los agentes: " + response),

            error=>console.log("Error: " + error),
        );
    }

    actualizarAgente(indice:number, agente:Agente){
        let url = 'https://valotracker-dd07f-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + ".json";

        this.httpClient.put(url,agente).subscribe(
            response=>console.log("se ha modificado correctamente el agente: " + response),

            error=>console.log("Error: " + error),
        );
    }

    eliminarAgente(indice:number){
        let url = 'https://valotracker-dd07f-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + ".json";

        this.httpClient.delete(url).subscribe(
            response=>console.log("se ha eliminado correctamente el agente: " + response),

            error=>console.log("Error: " + error),
        );
    }
}