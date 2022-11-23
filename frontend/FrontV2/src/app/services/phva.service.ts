import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPhva } from '../models/phva';
import { IResultado } from '../models/resultado-model';

@Injectable({
  providedIn: 'root'
})
export class PhvaService {

  private URL_BACKEND:string="http://localhost:8080/api";

  constructor(
    private httpClient: HttpClient
  ) { }

  regResultPhva(parametro:IPhva):Observable<string>{
    return this.httpClient.post<string>(this.URL_BACKEND+"/registrar",parametro);
  }

  regitrarResultadoAdutoria(parametro:IResultado):Observable<IResultado>{
    return this.httpClient.post<IResultado>(this.URL_BACKEND+"/guardar",parametro);
  }

  obtenerResultados(email:string| null):Observable<IResultado[]>{
    return this.httpClient.get<IResultado[]>(`${this.URL_BACKEND}/listarResultados/${email}`);
  }
}
