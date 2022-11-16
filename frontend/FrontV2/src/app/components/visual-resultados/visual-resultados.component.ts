import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visual-resultados',
  templateUrl: './visual-resultados.component.html',
  styleUrls: ['./visual-resultados.component.scss']
})
export class VisualResultadosComponent implements OnInit {

  nombreEmpresa:string = "";
  r1:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
