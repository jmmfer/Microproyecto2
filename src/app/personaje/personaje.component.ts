import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';

interface Personaje {
  name: string;
  location: string;
  especie: string;
  genero: boolean;
  image: any;
  origen: string;
  fecha: string;
  
}

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {
  constructor(
    protected Apiservice: ApiserviceService,
    private activatedRoute: ActivatedRoute
  ){}
  personaje: Personaje
  url: string;


  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      console.log('er paramertro' + params['id']);
      this.url = params['id'];
    
      this.Apiservice.getPersonaje(params['id'])
        .subscribe( respuesta => {
          console.log('el personaje traido por la api');
          console.log(respuesta);
          console.log(respuesta['name']);
          this.personaje = {
            name: respuesta['name'],
            location: respuesta['location']["name"],
            especie: respuesta['species'],
            image: respuesta["image"],
            genero: respuesta["gender"],
            origen: respuesta['origin']["name"],
            fecha: respuesta['created']
        
          };
          console.log(this.personaje);
        } );
    });
  }

}
