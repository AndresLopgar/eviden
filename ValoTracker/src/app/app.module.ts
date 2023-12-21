import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPersonalizadoComponent } from './components/error-personalizado/error-personalizado.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AgentesComponent } from './components/agentes/agentes.component';
import { dataServices } from './services/data-services';
import { loginService } from './services/login-service';
import { CookieService } from 'ngx-cookie-service';
import { loginGuardian } from './components/login/login-guard';
import { agenteService } from './services/agente-services';
import { NuevoAgenteComponent } from './components/nuevo-agente/nuevo-agente.component';
import { ActualizaAgentesComponent } from './components/actualiza-agentes/actualiza-agentes.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'agentes',component:AgentesComponent, canActivate:[loginGuardian]},
  {path:'nuevoAgente',component:NuevoAgenteComponent, canActivate:[loginGuardian]},
  {path:'listado/:refresh', component:AgentesComponent},
  {path:'login',component:LoginComponent},
  {path:'actualiza/:id', component: ActualizaAgentesComponent},
  {path:'**',component:ErrorPersonalizadoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NuevoAgenteComponent,
    ErrorPersonalizadoComponent,
    AgentesComponent,
    ActualizaAgentesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [dataServices,loginService,CookieService,loginGuardian,agenteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
