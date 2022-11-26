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
  preguntas = [{
    value:"", viewValue:""
  }];

  formUpInfo : FormGroup;

  constructor(private formBuilder : FormBuilder, private upInformation : UpInformationService) {

    this.formUpInfo = formBuilder.group({
      fileName : new FormControl(""),
      observations : new FormControl(""),

    })
    this.preguntas = this.upInformation.questions;
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
      companyName : sessionStorage.getItem("company"),
      emailAuditor: sessionStorage.getItem("auditor")
    }
    console.log(temp);
    this.upInformation.addQuestion(temp).subscribe(
      {
        next:(response) => {
          console.log(response)
        },
        complete:()=>{
          this.formUpInfo.setValue({
            fileName:"",
            observations:""
          });
          alert('Valores Agregados')

        }
      }
    )
  }
}
