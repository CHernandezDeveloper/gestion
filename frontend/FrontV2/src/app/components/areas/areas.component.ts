import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AreasService } from 'src/app/services/areas.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {

  areas = [
    "Control Interno",
    "Gestion Humana",
    "Responsable de compras y adquisiciones",
    "Responsable de la continuidad",
    "Responsable de la seguridad fisica",
    "Responsable del SI",
    "Responsable de TICs",
    "Calidad"
  ]
  formAreas: FormGroup;

  constructor(private formBuilder : FormBuilder, private areasService : AreasService) {

    this.formAreas = this.formBuilder.group(
      {
        p1 : new FormControl("",Validators.required),
        p2 : new FormControl("",Validators.required),
        p3 : new FormControl("",Validators.required),
        p4 : new FormControl("",Validators.required),
        p5 : new FormControl("",Validators.required),
        p6 : new FormControl("",Validators.required),
        p7 : new FormControl("",Validators.required),
        p8 : new FormControl("",Validators.required),

      }
    )
  }

  ngOnInit(): void { /* TODO document why this method 'ngOnInit' is empty */ }

  agregarArea(){

    let temp = {...this.formAreas.value, companyName: sessionStorage.getItem('company'),
    emailAuditor: sessionStorage.getItem('auditor'),}

    this.areasService.registerArea(temp).subscribe(
      {
        next:response => {
          console.log(response)
          alert("Informacion Registrada")
        },
        error: e => console.log(e)

      }
    )
  }

}
