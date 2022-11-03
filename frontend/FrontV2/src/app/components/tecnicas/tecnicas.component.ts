import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';
import { TecnicasService } from '../../services/tecnicas.service';

@Component({
  selector: 'app-tecnicas',
  templateUrl: './tecnicas.component.html',
  styleUrls: ['./tecnicas.component.scss']
})
export class TecnicasComponent implements OnInit {

  verPrueba:boolean=false;
  formT: FormGroup;

  controlT1:boolean=false;
  controlT2:boolean=false;
  controlT3:boolean=false;
  controlT4:boolean=false;
  controlT5:boolean=false;
  controlT6:boolean=false;
  controlT7:boolean=false;

  t1:number=0;
  t2:number=0;
  t3:number=0;
  t4:number=0;
  t5:number=0;
  t6:number=0;
  t7:number=0;

  constructor(
    private formBuilder:FormBuilder,
    private tecnicasService:TecnicasService

  ) { 

    this.formT=this.formBuilder.group({
      //T1
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
      //T1

      //T2
      p15: new FormControl("", Validators.required),
      p16: new FormControl("", Validators.required),
      //T2

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
    })
  }

  ngOnInit(): void {
  }

  calculoT1() {
    this.t1 = (Number(this.formT.value.p1) + Number(this.formT.value.p2)+ Number(this.formT.value.p3) +
                Number(this.formT.value.p4) + Number(this.formT.value.p5)+ Number(this.formT.value.p6) +
                Number(this.formT.value.p7) + Number(this.formT.value.p8)+ Number(this.formT.value.p9) +
                Number(this.formT.value.p10) + Number(this.formT.value.p11)+ Number(this.formT.value.p12) +
                Number(this.formT.value.p13) + Number(this.formT.value.p14)) / 14;
  }

  calculoT2() {
    this.t2 = (Number(this.formT.value.p15) + Number(this.formT.value.p16)) / 2;
  }

  regResult(){

  }

}
