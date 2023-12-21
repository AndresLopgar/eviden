import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agente } from 'src/app/agente.model';
import { agenteService } from 'src/app/services/agente-services';
import { ServicioAgenteService } from 'src/app/services/servicio-agente-services';

@Component({
  selector: 'app-actualiza-agentes',
  templateUrl: './actualiza-agentes.component.html',
  styleUrls: ['./actualiza-agentes.component.css'],
})
export class ActualizaAgentesComponent implements OnInit {
  accion!: number;

  constructor(
    private miServicio: ServicioAgenteService,
    private agenteServicio: agenteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  agentes : Agente[] = [];

  ngOnInit(): void {
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);

    this.agentes = this.agenteServicio.agentes;
    this.indice = this.route.snapshot.params['id'];

    let agente: Agente = this.agenteServicio.encontrarAgente(
      this.indice
    );

    this.cuadroNombre = agente.nombre;
    this.cuadroRol = agente.rol;
    this.cuadroNacionalidad = agente.nacionalidad;
  }

  cuadroNombre:string = "";
  cuadroRol:string = "";
  cuadroNacionalidad:string = "";

  indice!: number;

  actualizaAgente() {
    if (this.accion == 1) {
      let miAgente = new Agente(
        this.cuadroNombre,
        this.cuadroRol,
        this.cuadroNacionalidad
      );
      this.agenteServicio.actualizarAgente(this.indice, miAgente);
      this.volverHome();
    }
  }

  volverHome() {
    this.router.navigate(["/listado", "refresh"]);
  }
}
