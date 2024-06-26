import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import notify from 'devextreme/ui/notify';
import { Result, RootObject } from 'src/app/modelo/character.model';
import { Usuario } from 'src/app/modelo/usuario.model';
import { DashboardService } from 'src/app/servicios/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  characters: RootObject = {};
  lista: Result[] = [];
  usuarios: Usuario[];

  constructor(private router: Router, private dashboardService: DashboardService) { }

  ngOnInit(): void {

    this.dashboardService.GetUsers().subscribe((data: Usuario[]) => {

      this.usuarios = data;
    });

    this.dashboardService.GetCharacters()
    .subscribe((resp: RootObject) => {
      this.characters = resp;
    });
  }

  Add(id: number){
    this.dashboardService.GetCharacter(id)
    .subscribe((data: Result) => {
      this.lista.push(data);      
    });
  }

  Clear(){
    this.lista = [];
  }

  DeleteUser(id: number){
    this.dashboardService.DeleteUser(id).subscribe((data: any) => {
      if (data.correcto) {;
        console.log(data.msj);
      } else {
        notify("Error al eliminar el usuario: " + data.msj ,'error');
      }
    });
  }

}
