import { Component, OnInit, NgModule } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { FormsModule } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {
  personajes: [];
  first:boolean=true;
  last:boolean= true;
  prev:string='';
  next:string='';
  name:string;
  constructor(
    protected Apiservice: ApiserviceService,
    private activatedRoute: ActivatedRoute,
    private routerc: Router) { }

  ngOnInit(): void {
    this.Apiservice.getPersonajes()
    .subscribe(data => {
      this.personajes = data['results'];
      console.log(this.personajes);
      this.first= data['info']['prev']===null;
      this.last= data['info']['next']===null;
      this.prev= data['info']['prev'];
      this.next= data['info']['next'];
      
      console.log(this.personajes)},
      (error) => {
        console.error(error);
      })
      
   }
    goToPersonaje(id: string) {
      this.Apiservice.personajeFetch = id;
      console.log('El juego es ' + id);
      console.log('El juego es ' + this.Apiservice.personajeFetch);
      this.routerc.navigate(['/personaje']);
    }
    filtrar(){
      console.log("valor de filtro "+ this.name);
      this.Apiservice.filtrarPersonaje(this.name)
      .subscribe(data => {
        console.log(data);
        this.personajes = data['results'];
        console.log(this.personajes);
        this.first= data['info']['prev']===null;
        this.last= data['info']['next']===null;
        this.prev= data['info']['prev'];
        this.next= data['info']['next'];
        
        console.log(this.personajes)},
        (error) => {
          console.error(error);
        }        
      )
    }
    consultar(url:string=null){
      console.log('direccion'+url);
      this.Apiservice.getPersonajes(url)
      .subscribe(data => {
        this.personajes = data['results'];
        console.log(this.personajes);
        this.first= data['info']['prev']===null;
        this.last= data['info']['next']===null;
        this.prev= data['info']['prev'];
        this.next= data['info']['next'];
        
        console.log(this.personajes)},
        (error) => {
          console.error(error);
        }
        
      )
    }
}
