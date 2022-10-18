import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-up-information',
  templateUrl: './up-information.component.html',
  styleUrls: ['./up-information.component.scss']
})
export class UpInformationComponent implements OnInit {

  selected = "";
  in = 0;
  preguntas = [
    {},
    { value: 'p1', viewValue: 'Tipo de entidad (Nacional, Territorial A, Territorial B o C)' },
    { value: 'p2', viewValue: 'Misión' },
    { value: 'p3', viewValue: 'Análisis de contexto: La entidad debe determinar los aspectos externos e internos que son necesarios para cumplir su propósito y que afectan su capacidad para lograr los resultados previstos en el MSPI' },
  ]
  formUpInfo : FormGroup;

  constructor(private formBuilder : FormBuilder) {

    this.formUpInfo = formBuilder.group({
      nombreArchivo : new FormControl(""),
      observaciones : new FormControl("")
    })
  }



  ngOnInit(): void {

  }

  identificarId() {
     this.in = Number(this.selected.substring(1));
  }
}
