import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './servicios/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rick and morty';
  IsLogued: boolean;


  constructor( private loginService: LoginService, private router: Router) {
  }

  Init(): void {
    let token = this.loginService.getToken();
    if (token) {
      this.IsLogued = true;
    } else {
      this.IsLogued = false;
    }
  }

  SingOut(){
    this.loginService.removeToken();
    this.router.navigate(['/login']);
  }
}