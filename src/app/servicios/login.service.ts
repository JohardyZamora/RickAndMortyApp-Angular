import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Result, RootObject } from "../modelo/character.model";
import { Usuario } from "../modelo/usuario.model";
import { catchError, Observable, throwError } from "rxjs";

@Injectable()
export class LoginService{
    constructor(private httpClient: HttpClient) {}


    //Metodo de login
    Login(name: string, password: string): Observable<any> {

      const user: Usuario = {
        name: name,
        password: password
      };

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          Authorization: 'chocolate',
          'token': 'chocolate'
        })
      };

      return this.httpClient.post('https://localhost:7038/Login', user, httpOptions).pipe(
          catchError(this.handleError)
      );
    }

    setToken(token: string){
      localStorage.setItem('token', token);
    }

    getToken(){
      return localStorage.getItem('token');
    }

    removeToken(){
      return localStorage.removeItem('token');
    }

    private handleError(error: HttpErrorResponse) {
      if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, body was: `, error.error);
      }
      // Return an observable with a user-facing error message.
      return throwError(() => new Error('Something bad happened; please try again later.'));
    }
}