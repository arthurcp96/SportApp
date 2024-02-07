import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, Result } from '../../models/product.model';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenuList(): Observable <Result>{
    return this.http.get<Result>('http://localhost:8095/api/v1/menu').pipe(catchError((error: HttpErrorResponse) =>{
      let errorMessage = "";
      if(error.error instanceof ErrorEvent){
        errorMessage = 'Error: ${error.error.message}';

      } else {
        errorMessage = 'Error code: ${error.status}, message: ${error.message}'
      }

      return throwError(() => errorMessage);
    }))
  }
}


