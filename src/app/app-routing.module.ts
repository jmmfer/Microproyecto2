import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PersonajeComponent } from './personaje/personaje.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';
import { SignInComponent } from './login/signin/signin.component';
import { RegistrarComponent } from './login/registrar/registrar.component';


const routes: Routes = [
  { path: '', component: ListaPersonajesComponent},
  { path: 'login', component: LoginComponent},
  { path: 'personaje/:id', component: PersonajeComponent},
  { path: 'favoritos', component: FavoritosComponent},
  { path: 'listaPersonajes', component: ListaPersonajesComponent},
  { path: 'signin', component: SignInComponent},
  { path: 'registrar', component: RegistrarComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
