import { Component, OnInit } from '@angular/core';
import { RSA_X931_PADDING } from 'constants';
import { IResultado } from 'src/app/models/resultado-model';

@Component({
  selector: 'app-resultados-auditorias',
  templateUrl: './resultados-auditorias.component.html',
  styleUrls: ['./resultados-auditorias.component.scss']
})
export class ResultadosAuditoriasComponent implements OnInit {

  resultados: IResultado[] = [
    {

      companyName: 'empresa 1',
      emailAuditor: 'asdasd',
      r1: 121,
      r2: 2

    },
    {

      companyName: 'empresa 2',
      emailAuditor: 'asdasd',
      r1: 121,
      r2: 2

    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
