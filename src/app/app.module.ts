import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TecnologiaComponent } from './components/tecnologia/tecnologia.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperienciaComponent,
    InicioComponent,
    TecnologiaComponent,
    SobremiComponent,
    CurriculumComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
