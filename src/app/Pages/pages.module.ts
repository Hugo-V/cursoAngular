import { NgModule } from '@angular/core';
import { SharedModule } from '../Shared/shared.module';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { PagesRoutingModule } from './pagesrouting.module';
import { ShellComponent } from '../Pages/shell/shell.component';
import { ActividadesComponent } from '../Pages/actividades/actividades.component';
import { ProyectosComponent } from '../Pages/proyectos/proyectos.component';
import { ProyectoTablaComponent } from '../Pages/proyectos/proyecto-tabla/proyecto-tabla.component';
import { ProyectoDetallesComponent } from '../Pages/proyectos/proyecto-detalles/proyecto-detalles.component';
import { TablaActividadesComponent } from './actividades/tabla-actividades/tabla-actividades.component';
import { DetallesActividadesComponent } from './actividades/detalles-actividades/detalles-actividades.component';

const components = [
  ShellComponent,
  ActividadesComponent,
  ProyectosComponent,
  ProyectoTablaComponent,
  ProyectoDetallesComponent,
  TablaActividadesComponent,
  DetallesActividadesComponent,
  BienvenidaComponent
];

@NgModule({
  declarations: [components],
  exports: [components, PagesRoutingModule],
  imports: [SharedModule, PagesRoutingModule]
})
export class PagesModule { }
