import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders} from '@angular/common/http';

import { retry} from 'rxjs/operators';

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

apiURL = 'https://my-json-server.typicode.com/dajaramim/Api-TellevoApp/users';
    constructor(private http:HttpClient){
        console.log('hola');

    }

    // @param id id del objeto a rescatar​

    // * @returns Devuelve un Observable se utiliza any para adaptar el​
 
    // * objeto que devuelve pero se pueden utilizar modelos ej:​
 
    // * Post = {...}​
 
    // * 

    getUsers():Observable<any>{
        return this.http.get(this.apiURL).pipe(
          retry(3)
        );
    }
  getUser(userId):Observable<any>{
    return this.http.get(this.apiURL+'/'+userId).pipe(
      retry(3)
    );
}

}
