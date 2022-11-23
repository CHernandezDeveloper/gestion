import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { IResultado } from 'src/app/models/resultado-model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  faPower = faPowerOff;
  resultados : any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    sessionStorage.removeItem("login");
    sessionStorage.removeItem("auditor");
    this.router.navigateByUrl("login")
  }

  recibirRecibir(resultado: IResultado[]){
    this.resultados = resultado;
  }
}
