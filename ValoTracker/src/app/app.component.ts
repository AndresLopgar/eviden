import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { loginService } from './services/login-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private loginService:loginService) {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyAfGsn4vQl5qQvTq_EuN6MjW0YqclCMUrY',
      authDomain: 'valotracker-dd07f.firebaseapp.com',
    });
  }
  title = 'ValoTracker';

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  logout(){
    return this.loginService.logout();
  }
}

