import { RouterModule ,Routes } from "@angular/router";
import { RegistroComponent } from "./components/registro/registro.component";
import { EncuestaComponent } from "./components/encuesta/encuesta.component";


export const APP_ROUTES: Routes = [
    { path: 'home', component: RegistroComponent },
    { path: 'encuesta/:nombre/:id', component: EncuestaComponent },
    { path: '**', pathMatch: 'full', redirectTo:'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);