import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAreas } from '../models/areas-involucradas.model';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  private URL_BACKEND:string = "http://localhost:8080/api";

  constructor(private httpClient : HttpClient) { }

  registerArea(area : IAreas):Observable<string>{

    return this.httpClient.post<string>(this.URL_BACKEND+"/area",area);
  }
}
