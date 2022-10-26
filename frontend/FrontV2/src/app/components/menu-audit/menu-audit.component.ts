import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-audit',
  templateUrl: './menu-audit.component.html',
  styleUrls: ['./menu-audit.component.scss']
})
export class MenuAuditComponent implements OnInit {

  fases = ['Levantamiento Info','Areas Involucradas','Administrativas','Tecnicas','PHVA']
  option : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
