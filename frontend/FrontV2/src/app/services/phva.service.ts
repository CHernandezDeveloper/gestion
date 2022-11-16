import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPhva } from '../models/phva';

@Injectable({
  providedIn: 'root'
})
export class PhvaService {

  private URL_BACKEND:string="http://localhost:8080/api";

  constructor(
    private httpClient: HttpClient
  ) { }

  regResultPhva(parametro:IPhva):Observable<String>{
    return this.httpClient.post<String>(this.URL_BACKEND+"/registrar",parametro);
  }
}
