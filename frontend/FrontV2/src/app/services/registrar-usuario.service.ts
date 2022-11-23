import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from '../models/login.model';
import { IUsuario } from '../models/registrar-usuario.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrarUsuarioService {

  private URL_BACKEND:string = "http://localhost:8080/api"


  constructor(private http:HttpClient) { }


  registerAuditor(user:IUsuario):Observable<IUsuario>{

    console.log(user)
    return this.http.post<IUsuario>(this.URL_BACKEND+"/auditors",user);

  }

  login(data : ILogin){

    console.log(data)
    return this.http.post<ILogin>(this.URL_BACKEND+"/login",data);

  }

  actualizarAuditor(user:IUsuario):Observable<IUsuario>{
    return this.http.post<IUsuario>(this.URL_BACKEND+"/actualizar",user);
  }

}
