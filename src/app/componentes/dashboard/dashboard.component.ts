import { Component, OnInit } from '@angular/core';
import { Result, RootObject } from 'src/app/modelo/character.model';
import { DashboardService } from 'src/app/servicios/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  characters: RootObject = {};
  lista: Result[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
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

  Ver(){
    console.log(this.characters);
  }

  VerItems(){
    console.log(this.lista);
  }

  Clear(){
    this.lista = [];
  }

}
