import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FacebookModule } from 'ngx-facebook';
import{FormsModule, ReactiveFormsModule}  from '@angular/forms';

//rutas
import { APP_ROUTING } from './app.router';

//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { RegistroComponent } from './components/registro/registro.component';

//servicios
import { CategoriaService } from './services/categoria-service.service';
import { RegistroService } from './services/registro.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CategoriaComponent,
    EncuestaComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FacebookModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [
    CategoriaService,
    RegistroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }