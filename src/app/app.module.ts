import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { ProductosComponent } from './component/productos/productos.component';
import { FooterComponent } from './component/footer/footer.component';
import { FutbolComponent } from './component/futbol/futbol.component';
import { TenismesaComponent } from './component/tenismesa/tenismesa.component';
import { NatacionComponent } from './component/natacion/natacion.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    ProductosComponent,
    FooterComponent,
    FutbolComponent,
    TenismesaComponent,
    NatacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
