import { Component, OnInit } from '@angular/core';
import { IResultado } from 'src/app/models/resultado-model';

@Component({
  selector: 'app-menu-audit',
  templateUrl: './menu-audit.component.html',
  styleUrls: ['./menu-audit.component.scss']
})
export class MenuAuditComponent implements OnInit {

  fases = ['Levantamiento Info', 'Areas Involucradas', 'Administrativas', 'Tecnicas', 'PHVA']
  option: string = "";

  resultado: IResultado = {
    companyName: sessionStorage.getItem('companyName'),
    emailAuditor: sessionStorage.getItem('auditor')
  };

  constructor() { }

  ngOnInit(): void {
  }

  recibiendoJsoAdmin(json: any) {

    this.resultado = { ...json }
  }

  recibiendoJsonTecni(jsonTe: any) {
    this.resultado = {
      ...this.resultado,
      ...jsonTe
    }
    console.log(this.resultado)
  }
}
