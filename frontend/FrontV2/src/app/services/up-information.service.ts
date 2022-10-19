import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInformation } from '../models/up-information.model';

@Injectable({
  providedIn: 'root'
})
export class UpInformationService {

  private URL_BACKEND:string = "http://localhost:8080/api"

  constructor(private httpClient : HttpClient) { }

  addQuestion(question: IInformation):Observable<string>{

    return this.httpClient.post<string>(this.URL_BACKEND+"/information",question);

  }
}
