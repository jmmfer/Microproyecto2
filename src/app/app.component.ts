import { Component } from '@angular/core';
import {ApiserviceService} from './apiservice.service';
import {loggedin, userID} from './global-variable';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Microproyecto2';
  constructor(
    protected Apiservice: ApiserviceService,public authService:AuthService
  ) {
  }

  ngOnInit() {
  }

  isLoggedIn():boolean{
    return JSON.parse(localStorage.getItem('user'))!==null;
   }

   logout(){
     console.log(JSON.parse(localStorage.getItem('user')))
    this.authService.logout();
    console.log(JSON.parse(localStorage.getItem('user')))
   }

}
