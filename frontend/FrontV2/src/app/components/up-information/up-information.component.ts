import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UpInformationService } from 'src/app/services/up-information.service';

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
    { value: 'p31', viewValue: 'Análisis de contexto: La entidad debe determinar los aspectos externos e internos que son necesarios para cumplir su propósito y que afectan su capacidad para lograr los resultados previstos en el MSPI' },

  ]
  formUpInfo : FormGroup;

  constructor(private formBuilder : FormBuilder, private upInformation : UpInformationService) {

    this.formUpInfo = formBuilder.group({
      fileName : new FormControl(""),
      observations : new FormControl(""),

    })
  }



  ngOnInit(): void {

  }

  identificarId() {
    this.in = Number(this.selected.substring(1));
    console.log(this.in);

  }

  enviarInfo(){

    const temp = {
      p: this.in,
      fileName : this.formUpInfo.value.fileName,
      observations : this.formUpInfo.value.observations,
      emailAuditor: sessionStorage.getItem("auditor")
    }
    console.log(temp);
    this.upInformation.addQuestion(temp).subscribe(
      {
        next:(response) => {
          console.log(response)
        },
        complete:()=>alert('Valores Agregados')
      }
    )
  }
}
