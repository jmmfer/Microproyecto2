import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule} from "@angular/fire/auth";
import { LoginComponent } from './login/login.component';
import { PersonajeComponent } from './personaje/personaje.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';
import { SignInComponent } from './login/signin/signin.component';
import { RegistrarComponent } from './login/registrar/registrar.component';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PersonajeComponent,
    FavoritosComponent,
    ListaPersonajesComponent,
    SignInComponent,
    RegistrarComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
