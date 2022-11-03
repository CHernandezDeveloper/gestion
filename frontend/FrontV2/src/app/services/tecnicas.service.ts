import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITecnicas } from '../models/tecnicas';

@Injectable({
  providedIn: 'root'
})
export class TecnicasService {

  private URL_BACKEND:string="http://localhost:8080/api";

  constructor(
    private httpClient: HttpClient
  ) { }

  regResultAdmin(parametro:ITecnicas):Observable<String>{
    return this.httpClient.post<String>(this.URL_BACKEND+"/registrar",parametro);
  }
}
