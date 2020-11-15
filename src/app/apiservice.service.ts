import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor( 
    protected http: HttpClient,
    private firestore: AngularFirestore) { 
    
  }
  page = 1;
  search: string;
  personajeFetch: string;
getPersonajes(url:string='https://rickandmortyapi.com/api/character') {
  console.log('service'+url);
  return this.http.get(url);
}
getPersonaje(id: string) {
  return this.http.get('https://rickandmortyapi.com/api/character/'+ id);
}

filtrarPersonaje(texto:string=null){
  console.log("filtro texto "+ texto)
  return this.http.get('https://rickandmortyapi.com/api/character/',{
    params:{name:texto}});
}
}
