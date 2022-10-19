import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRCompany } from '../models/registerCompany.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private URL_BACKEND:string = "http://localhost:8080/api";

  constructor(private http : HttpClient) { }

  registerCompany(company:IRCompany):Observable<IRCompany>{


    return this.http.post<IRCompany>(this.URL_BACKEND+"/companies",company);

  }

}
