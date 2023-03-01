import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Result, RootObject } from "../modelo/character.model";
import { Usuario } from "../modelo/usuario.model";

@Injectable()
export class DashboardService{
    constructor(private httpClient: HttpClient) {}

    GetCharacters(){
        return this.httpClient.get<Usuario>('https://localhost:7038/Login');
    }
}