import { Injectable } from '@angular/core';


import  {Observable} from 'rxjs/Observable';

import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class ServicesService {
  
  constructor(private http:HttpClient) { }

  getAllUsers(): any {
   
    const url = 'http://jsonplaceholder.typicode.com/users';
    return this.http.get(url).pipe(
        tap(_ => console.log(`api result is success`)),
        catchError(this.handleError(`api result status is unsuccessfull.`))
    );
}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
  };
}

private log(message: string) {
console.log(`AppService: ${message}`);
}

}


