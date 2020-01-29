import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { forkJoin } from 'rxjs';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Customer } from '../app/models/customer';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://freigthtransport.ddns.net:1024/FreightTransport/project/client/clients";
const urlAdd="http://freigthtransport.ddns.net:1024/FreightTransport/project/client/addClient";
const urlDelete="http://freigthtransport.ddns.net:1024/FreightTransport/project/client/deleteClient";
const urlUpdate="http://freigthtransport.ddns.net:1024/FreightTransport/project/client/updateclient";
const urlgetId="http://freigthtransport.ddns.net:1024/FreightTransport/project/client/searchClient";
const urlGuide="http://freigthtransport.ddns.net:1024/FreightTransport/project/guide";
@Injectable({
  providedIn:"root"
})

export class ApiserviceService {
  
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  getClassroom(){
    return this.http.get(apiUrl);
  }
  getGuides(){
    return this.http.get(urlGuide+'/showallguides');
  }
  getItem(id){
    console.log("hola"+id);
    return this.http.get(urlgetId + '/' + 'id', this.httpOptions);
  }
  // Create a new item
  createItem(item): Observable<Customer> {
    console.log("agreg service");
    console.log( JSON.stringify(item));
    return this.http.post<Customer>(urlAdd, JSON.stringify(item), this.httpOptions);
  }
  deleteItem(id) {
    return this.http.delete<Customer>(urlDelete + '/' + id, this.httpOptions);
  }
  updateItem(id, item): Observable<Customer> {
    console.log("servicio uodate");
    console.log( JSON.stringify(item));
    return this.http.put<Customer>(urlUpdate + '/' + id, JSON.stringify(item), this.httpOptions);
  }
}