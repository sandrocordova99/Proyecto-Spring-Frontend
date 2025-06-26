import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ListarAlumnosComponent } from './vistas/alumnos/listar-alumnos/listar-alumnos.component';
import { AppComponent } from './app.component';

// Importá tus componentes acá

@NgModule({
  declarations: [
    AppComponent,
    ListarAlumnosComponent
    // y demás componentes
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
