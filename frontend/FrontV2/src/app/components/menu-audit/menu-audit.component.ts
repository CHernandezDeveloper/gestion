import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IResultado } from 'src/app/models/resultado-model';
import { PhvaService } from 'src/app/services/phva.service';


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

  @Output() emitirResultado = new EventEmitter;

  constructor(private phvaService: PhvaService) { }

  ngOnInit(): void {
  }

  recibiendoJsoAdmin(json: any) {

    this.resultado = {
      ...this.resultado,
      ...json,
      r4s1:20,
      r4s2:20,
      r4s3:20,
      r4s4:20,
      r8:30,
      r9:30,
      r41s1:20,
      r41s2:20,
      r41s3:20,
      r41s4:20,
      r41s5:20,
    }
  }

  recibiendoJsonTecni(jsonTe: any) {
    this.resultado = {
      ...this.resultado,
      ...jsonTe
    }
    console.log(this.resultado)
  }

  onRecibiendoJsonPhva(json: any) {
    this.resultado = {
      ...this.resultado,
      ...json,
    }
    console.log(this.resultado)
    this.phvaService.regitrarResultadoAdutoria(this.resultado).subscribe(
      {

        next: (response) => {
          if (response) {
            alert('Auditoria guardada con exito')
            console.log(response)
          }
        },
        complete:()=>{
          this.phvaService.obtenerResultados(this.resultado.emailAuditor).subscribe({
            next:(response)=>{
              this.emitirResultado.emit(response);
            }
          })
        }
      }
    );
  }
}
