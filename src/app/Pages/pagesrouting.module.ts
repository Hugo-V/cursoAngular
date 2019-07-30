import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ShellComponent } from './shell/shell.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ProyectoTablaComponent } from './proyectos/proyecto-tabla/proyecto-tabla.component';
import { ProyectoDetallesComponent } from './proyectos/proyecto-detalles/proyecto-detalles.component';
import { TablaActividadesComponent } from './actividades/tabla-actividades/tabla-actividades.component';
import { DetallesActividadesComponent } from './actividades/detalles-actividades/detalles-actividades.component';
import { GuardService } from '../Shared/services/guard.service';

const Router: Routes = [
  {
    path: '', component: ShellComponent, children: [
      {
        path: 'actividades', component: ActividadesComponent, children: [
          { path: 'tabla', component: TablaActividadesComponent, canActivate: [GuardService]},
          { path: 'detalles', component: DetallesActividadesComponent, canActivate: [GuardService] }
        ]
      },
      {
        path: 'proyectos', component: ProyectosComponent, children: [
          { path: 'tabla', component: ProyectoTablaComponent, canActivate: [GuardService]},
          { path: 'detalles', component: ProyectoDetallesComponent, canActivate: [GuardService]}
        ]
      },
      { path: 'Inicio', component: BienvenidaComponent, canActivate: [GuardService]},
      { path: '', redirectTo: 'Inicio', pathMatch: 'full' }
    ]
  }
 
  ];

@NgModule({
  imports: [RouterModule.forChild(Router)]
})
export class PagesRoutingModule { }
