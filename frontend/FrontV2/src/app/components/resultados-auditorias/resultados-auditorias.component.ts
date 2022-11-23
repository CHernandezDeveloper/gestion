import { Component, Input, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { IResultado } from 'src/app/models/resultado-model';
import { PhvaService } from 'src/app/services/phva.service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-resultados-auditorias',
  templateUrl: './resultados-auditorias.component.html',
  styleUrls: ['./resultados-auditorias.component.scss']
})
export class ResultadosAuditoriasComponent implements OnInit {

  control1: boolean = false;
  control2: boolean = false;
  control3: boolean = false;
  control4: boolean = false;
  control5: boolean = false;
  control6: boolean = false;
  valores = [this.control1, this.control2, this.control3, this.control4, this.control5, this.control6]

  @Input() resultados: IResultado[] = [];
  mostarTodosLosResultados: boolean = false;
  nivelMadurezInicial: number = 0;
  nivelMadurezGestionado: number = 0;
  nivelMadurezDefinido: number = 0;
  nivelMadurezGestionadoCuantitativamente: number = 0;
  nivelMadurezGestionadoOptimizado: number = 0;


  constructor(private phvaService: PhvaService) {

  }

  ngOnInit(): void {
    let email = sessionStorage.getItem('auditor');
    this.phvaService.obtenerResultados(email).subscribe({
      next: (response) => {
        this.resultados = response;
        console.log(this.resultados)
        this.resultados.forEach((elemento) => {

          this.nivelMadurezInicial = (elemento.r1 + elemento.r2 + elemento.r3
            + elemento.r5 + elemento.r6 + elemento.r7 + elemento.r8);

          this.nivelMadurezGestionado = (elemento.r11 + elemento.r12 + elemento.r13
            + elemento.r14 + elemento.r15 + elemento.r16 + elemento.r17 + elemento.r18 + elemento.r19);

          this.nivelMadurezDefinido = (elemento.r20 + elemento.r21 + elemento.r22
            + elemento.r23 + elemento.r24 + elemento.r25 + elemento.r26 + elemento.r27 + elemento.r28 + elemento.r29
            + elemento.r30 + elemento.r31 + elemento.r32 + elemento.r33 + elemento.r34 + elemento.r35
            + elemento.r36 + elemento.r37 + elemento.r38 + elemento.r39 + elemento.r40);

          this.nivelMadurezGestionadoCuantitativamente = (elemento.r42 + elemento.r43 + elemento.r44
            + elemento.r45);

          this.nivelMadurezGestionadoOptimizado = elemento.r55 + elemento.r46 + elemento.r47 + elemento.r48 + elemento.r49 + elemento.r50 + elemento.r51
            + elemento.r52 + elemento.r53;

        })
      }
    })

  }

  onExportarPdf() {
    const DATA = document.getElementById('data');

    const doc = new jsPDF('p', 'pt', 'A4');

    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_auditoria.pdf`);
    });
  }
}


