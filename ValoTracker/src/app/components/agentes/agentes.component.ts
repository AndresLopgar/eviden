import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agente } from 'src/app/agente.model';
import { agenteService } from 'src/app/services/agente-services';
import { ServicioAgenteService } from 'src/app/services/servicio-agente-services';

@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.css'],
})
export class AgentesComponent implements OnInit {
  accion!: number;

  constructor(
    private miServicio: ServicioAgenteService,
    private agenteServicio: agenteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  agentes: Agente[] = [];

  refresh!: string;

  ngOnInit(): void {
    this.refresh = this.route.snapshot.params['refresh'];
    if (this.refresh == "refresh") {
      this.router.navigateByUrl("/agentes")
    }

    this.agenteServicio.obtenerAgentes().subscribe((misAgentes) => {
      console.log(misAgentes);
      this.agentes = Object.values(misAgentes);
      this.agenteServicio.setAgentes(this.agentes);
    });
    this.agentes = this.agenteServicio.agentes;
  }

  cuadroNombre: string = '';
  cuadroRol: string = '';
  cuadroNacionalidad: string = '';

  eliminarAgente(indice:number) {
    this.agenteServicio.eliminaragente(indice);
    this.volverHome();
  }

  volverHome() {
    this.router.navigate(["/listado", "refresh"]);
  }
}
