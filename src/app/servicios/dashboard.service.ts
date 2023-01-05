import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Result, RootObject } from "../modelo/character.model";

@Injectable()
export class DashboardService{
    private url = 'https://rickandmortyapi.com/api/character';

    constructor(private httpClient: HttpClient) {}

    GetCharacters(){
        return this.httpClient.get<RootObject>(this.url);
    }

    GetCharacter(id: number){
        return this.httpClient.get<Result>('https://rickandmortyapi.com/api/character/' + id);
    }
}