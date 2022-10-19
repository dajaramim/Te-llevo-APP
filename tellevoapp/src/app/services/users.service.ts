import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders, HttpErrorResponse} from '@angular/common/http';

import { retry, catchError } from 'rxjs/operators';

import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
export class UsersService {
httpOptions = {
    headers: new HttpHeaders
        ({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': ''
        })
    }

apiURL = ' http://192.168.0.129:3000';
    constructor(private http:HttpClient){
        console.log('hola');

    }

    // @param id id del objeto a rescatar​

    // * @returns Devuelve un Observable se utiliza any para adaptar el​
 
    // * objeto que devuelve pero se pueden utilizar modelos ej:​
 
    // * Post = {...}​
 
    // * 

    getUsers():Observable<any>{
        return this.http.get(this.apiURL+'/users/').pipe(
          retry(3)
        );
    }
  getUser(userId):Observable<any>{
    return this.http.get(this.apiURL+'/users/'+userId).pipe(
      retry(3)
    );
}

}
