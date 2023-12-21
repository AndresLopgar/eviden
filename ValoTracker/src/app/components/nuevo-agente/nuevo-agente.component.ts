import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agente } from 'src/app/agente.model';
import { agenteService } from 'src/app/services/agente-services';
import { ServicioAgenteService } from 'src/app/services/servicio-agente-services';

@Component({
  selector: 'app-nuevo-agente',
  templateUrl: './nuevo-agente.component.html',
  styleUrls: ['./nuevo-agente.component.css']
})
export class NuevoAgenteComponent implements OnInit{

  constructor(private miServicio:ServicioAgenteService, private agenteServicio:agenteService, private router:Router){}


  agentes : Agente[] = [];

  ngOnInit(): void {
    this.agenteServicio.obtenerAgentes().subscribe(misAgentes=>{
      console.log(misAgentes);
      this.agentes=Object.values(misAgentes);
      this.agenteServicio.setAgentes(this.agentes);
    });
  }

  cuadroNombre:string = "";
  cuadroRol:string = "";
  cuadroNacionalidad:string = "";

  agregarAgente() {
    let miAgente = new Agente(this.cuadroNombre, this.cuadroRol, this.cuadroNacionalidad);
    this.agenteServicio.agregarAgentesServicio(miAgente);
    this.volverHome();
  }

  volverHome() {
    this.router.navigate(["/listado", "refresh"]);
  }
}
