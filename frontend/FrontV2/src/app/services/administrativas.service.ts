import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdministrativas } from '../models/administrativas.model';

@Injectable({
  providedIn: 'root'
})
export class AdministrativasService {

  private URL_BACKEND:string = "http://localhost:8080/api";


  constructor(private httpClient: HttpClient) {

  }

  regResultAdmin(parametro :IAdministrativas):Observable<String>{

    return this.httpClient.post<String>(this.URL_BACKEND+"/registrar",parametro);

  }
}
