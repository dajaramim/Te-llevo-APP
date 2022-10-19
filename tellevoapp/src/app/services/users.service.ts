import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders, HttpErrorResponse} from '@angular/common/http';

import { retry, catchError } from 'rxjs/operators';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class MapService {
httpOptions = {
    headers: new HttpHeaders
        ({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': ''
        })
    }

apiURL = 'https://github.com/yaravivillegas/ionic/blob/main/db.json';
    constructor(private http:HttpClient){
        console.log('ola');

    }

    // @param id id del objeto a rescatar​

    // * @returns Devuelve un Observable se utiliza any para adaptar el​
 
    // * objeto que devuelve pero se pueden utilizar modelos ej:​
 
    // * Post = {...}​
 
    // * 

    getLocations():Observable<any>{
        return this.http.get(this.apiURL).pipe(
          retry(3)
        );
      }

}
