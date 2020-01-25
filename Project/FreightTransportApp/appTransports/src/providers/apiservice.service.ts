import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://freigthtransport.ddns.net:1024/FreightTransport/project/client/clients";
@Injectable({
  providedIn:"root"
})

export class ApiserviceService {
  
  constructor(private http: HttpClient) { }
  
  getClassroom(){
    return this.http.get(apiUrl);
  }
  
}