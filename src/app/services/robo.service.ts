import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { RoboPosicoes } from 'src/models/robo';

@Injectable({
  providedIn: 'root'
})
export class RoboService {

  base_path = 'https://localhost:7119/api/v1/robo/';

  constructor(public http: HttpClient) { 
     
  }

  getPosicoesRobo(): Observable<RoboPosicoes>{
    return this.http
      .get<RoboPosicoes>(this.base_path + "getPosicoes")
      .pipe(
        catchError(this.handleError)
      );
  }

  movimentarPulso(hemisferio: number, sentido: number): Observable<RoboPosicoes>{

    var req = {
      sentido: sentido,
      hemisferio: hemisferio
    };

    return this.http
      .post<RoboPosicoes>(this.base_path + "braco/movimentarPulso", req)
      .pipe(
        catchError(this.handleError)
      );
  }

  movimentarCotovelo(hemisferio: number, sentido: number): Observable<RoboPosicoes>{

    var req = {
      sentido: sentido,
      hemisferio: hemisferio
    };

    return this.http
      .post<RoboPosicoes>(this.base_path + "braco/movimentarCotovelo", req)
      .pipe(
        catchError(this.handleError)
      );
  }

  rotacionarCabeca(sentido: number): Observable<RoboPosicoes>{

    var req = {
      sentido: sentido
    };

    return this.http
      .post<RoboPosicoes>(this.base_path + "cabeca/rotacionar", req)
      .pipe(
        catchError(this.handleError)
      );
  }

  inclinarCabeca(sentido: number): Observable<RoboPosicoes>{

    var req = {
      sentido: sentido
    };

    return this.http
      .post<RoboPosicoes>(this.base_path + "cabeca/inclinar", req)
      .pipe(
        catchError(this.handleError)
      );
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'responseType': 'text'
    })
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `API returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(error.error);
  };

}
