import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './component/inicio/inicio.component';
import { FutbolComponent } from './component/futbol/futbol.component';
import { NatacionComponent } from './component/natacion/natacion.component';
import { TenismesaComponent } from './component/tenismesa/tenismesa.component';

const routes: Routes = [

{path: 'inicio', component:InicioComponent},
{path: 'futbol', component:FutbolComponent},
{path: 'natacion', component:NatacionComponent},
{path: 'tenisdemesa', component:TenismesaComponent},
{path: '', component: InicioComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
