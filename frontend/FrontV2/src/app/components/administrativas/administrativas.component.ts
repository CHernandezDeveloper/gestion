import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-administrativas',
  templateUrl: './administrativas.component.html',
  styleUrls: ['./administrativas.component.scss']
})
export class AdministrativasComponent implements OnInit{

  verPrueba : boolean = false;
  formAdministrativas : FormGroup;

  controlAD1 : boolean = false;
  controlAD2 : boolean = false;
  controlAD3 : boolean = false;
  controlAD4 : boolean = false;
  controlAD5 : boolean = false;
  controlAD6 : boolean = false;
  controlAD7 : boolean = false;


  //Variables a enviar al formulario
  ad1: number =  0 ;
  ad2 : number = 0;
  ad3 : number = 0;
  ad4 : number = 0;
  ad5 : number = 0;
  ad6 : number = 0;
  ad7 : number = 0;


  constructor(private formBuilder: FormBuilder) {
    this.formAdministrativas = this.formBuilder.group(
      {
        p1: new FormControl("", Validators.required),
        p2: new FormControl("", Validators.required),

        p3: new FormControl("", Validators.required),
        p4: new FormControl("", Validators.required),
        p5: new FormControl("", Validators.required),
        p6: new FormControl("", Validators.required),
        p7: new FormControl("", Validators.required),
        p8: new FormControl("", Validators.required),
        p9: new FormControl("", Validators.required),

        p10: new FormControl("", Validators.required),
        p11: new FormControl("", Validators.required),
        p12: new FormControl("", Validators.required),
        p13: new FormControl("", Validators.required),
        p14: new FormControl("", Validators.required),
        p15: new FormControl("", Validators.required),

        p16: new FormControl("", Validators.required),
        p17: new FormControl("", Validators.required),
        p18: new FormControl("", Validators.required),
        p19: new FormControl("", Validators.required),
        p20: new FormControl("", Validators.required),
        p21: new FormControl("", Validators.required),
        p22: new FormControl("", Validators.required),
        p23: new FormControl("", Validators.required),
        p24: new FormControl("", Validators.required),
        p25: new FormControl("", Validators.required),

        p26: new FormControl("", Validators.required),
        p27: new FormControl("", Validators.required),
        p28: new FormControl("", Validators.required),
        p29: new FormControl("", Validators.required),

        p30: new FormControl("", Validators.required),
        p31: new FormControl("", Validators.required),
        p32: new FormControl("", Validators.required),
        p33: new FormControl("", Validators.required),
        p34: new FormControl("", Validators.required),
        p35: new FormControl("", Validators.required),
        p36: new FormControl("", Validators.required),

        p37: new FormControl("", Validators.required),
        p38: new FormControl("", Validators.required),



      }
    )
  }

  ngOnInit(): void {
  }

  calculoAD1(){
    this.ad1 = (Number(this.formAdministrativas.value.p1) + Number(this.formAdministrativas.value.p2)) / 2 ;
  }

  calculoAD2(){
    this.ad1 = (Number(this.formAdministrativas.value.p1) + Number(this.formAdministrativas.value.p2)) / 2 ;
  }

  calculoAD3(){
    this.ad1 = (Number(this.formAdministrativas.value.p1) + Number(this.formAdministrativas.value.p2)) / 2 ;
  }

  calculoAD4(){
    this.ad1 = (Number(this.formAdministrativas.value.p1) + Number(this.formAdministrativas.value.p2)) / 2 ;
  }

  calculoAD5(){
    this.ad1 = (Number(this.formAdministrativas.value.p1) + Number(this.formAdministrativas.value.p2)) / 2 ;
  }

  calculoAD6(){
    this.ad1 = (Number(this.formAdministrativas.value.p1) + Number(this.formAdministrativas.value.p2)) / 2 ;
  }

  calculoAD7(){
    this.ad1 = (Number(this.formAdministrativas.value.p1) + Number(this.formAdministrativas.value.p2)) / 2 ;
  }

}
