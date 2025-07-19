import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Result, RootObject } from "../modelo/character.model";
import { catchError, Observable, throwError } from "rxjs";
import { LoginService } from "./login.service";
import { Usuario } from "../modelo/usuario.model";

@Injectable()
export class DashboardService{
    private url = 'https://rickandmortyapi.com/api/character';

    constructor(private httpClient: HttpClient, private loginService: LoginService) {}

    GetCharacters(){
        return this.httpClient.get<RootObject>(this.url);
    }

    GetCharacter(id: number){
        return this.httpClient.get<Result>('https://rickandmortyapi.com/api/character/' + id);
    }

    GetUsers(): Observable<Usuario[]>{

        let token = "Bearer " + this.loginService.getToken();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': token
            })
        };
        return this.httpClient.get<Usuario[]>('https://localhost:44312/GetUsers', httpOptions).pipe(
            catchError(this.handleError)
        );
    }

    DeleteUser(id: number){

        let token = "Bearer " + this.loginService.getToken();
        const options = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': token
            })
        };
        return this.httpClient.delete('https://localhost:44312/DeleteUser?idUser=' + id, options).pipe(
            catchError(this.handleError)
        );
    }
    
    private handleError(error: HttpErrorResponse) {
        console.log(error);
        if (error.status === 0) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, body was: `, error.message);
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
      }
}