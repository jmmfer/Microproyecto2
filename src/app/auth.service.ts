import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from  "@angular/router";
import {User} from "firebase";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user: User;
  constructor(
    public afAuth: AngularFireAuth, public  router:  Router
  ) { this.afAuth.authState.subscribe(user => {
    if (user){
      this.user = user;
      localStorage.setItem('user', JSON.stringify(this.user));
    } else {
      localStorage.setItem('user', null);
    }
  })}
  
 
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }  

  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!')
        this.router.navigate(['/listaPersonajes']);
    }).catch((error) => {
        console.log(error)
    })
  }
  get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
}
async logout(){
  await this.afAuth.signOut();
  localStorage.removeItem('user');
  this.router.navigate(['/listaPersonajes']);
}


}