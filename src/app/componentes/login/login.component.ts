import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelo/usuario.model';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: string;
  password: string;
  IsLogued: boolean;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    let token = this.loginService.getToken();
    if (token) {
      this.router.navigate(['/']);
      this.IsLogued = true;
    } else {
      this.IsLogued = false;
    }
  }

  Login(){
    this.loginService.Login(this.name, this.password).subscribe((data: any) => {

      if (data.correcto && data.token) {
        this.loginService.setToken(data.token);
        this.router.navigate(['/']);
      } else {
        console.error(data.msj)
      }
    });
  }
}
