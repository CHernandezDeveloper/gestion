import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { IPhva } from 'src/app/models/phva';
import { PhvaService } from 'src/app/services/phva.service';
import { TecnicasService } from 'src/app/services/tecnicas.service';

@Component({
  selector: 'app-phva',
  templateUrl: './phva.component.html',
  styleUrls: ['./phva.component.scss']
})
export class PhvaComponent implements OnInit {

  verPrueba:boolean=false;
  formphva: FormGroup;

  controlPhva1:boolean=false;
  controlPhva2:boolean=false;
  controlPhva3:boolean=false;
  controlPhva4:boolean=false;

  phva1:number=0;
  phva2:number=0;
  phva3:number=0;
  phva4:number=0;
  

  constructor(
    private formBuilder:FormBuilder,
    private phvaService:PhvaService
  ) { 

    this.formphva=this.formBuilder.group({
      //PHVA1
      p1: new FormControl("", Validators.required),
      ob1:new FormControl(""),
      p2: new FormControl("", Validators.required),
      ob2:new FormControl(""),
      p3: new FormControl("", Validators.required),
      ob3:new FormControl(""),
      p4: new FormControl("", Validators.required),
      ob4:new FormControl(""),
      p5: new FormControl("", Validators.required),
      ob5:new FormControl(""),

      //PHVA2
      p6: new FormControl("", Validators.required),
      ob6:new FormControl(""),
      p7: new FormControl("", Validators.required),
      ob7:new FormControl(""),
      p8: new FormControl("", Validators.required),
      ob8:new FormControl(""),
      p9: new FormControl("", Validators.required),
      ob9:new FormControl(""),
      p10: new FormControl("", Validators.required),
      ob10:new FormControl(""),
      p11: new FormControl("", Validators.required),
      ob11:new FormControl(""),
      p12: new FormControl("", Validators.required),
      ob12:new FormControl(""),
      p13: new FormControl("", Validators.required),
      ob13:new FormControl(""),
      p14: new FormControl("", Validators.required),
      ob14:new FormControl(""),
      //T1

      //T2
      p15: new FormControl("", Validators.required),
      ob15:new FormControl(""),
      p16: new FormControl("", Validators.required),
      ob16:new FormControl(""),
      //T2

      //T3  
      p17: new FormControl("", Validators.required),
      ob17:new FormControl(""),
      p18: new FormControl("", Validators.required),
      ob18:new FormControl(""),
      p19: new FormControl("", Validators.required),
      ob19:new FormControl(""),
      p20: new FormControl("", Validators.required),
      ob20:new FormControl(""),
      p21: new FormControl("", Validators.required),
      ob21:new FormControl(""),
      p22: new FormControl("", Validators.required),
      ob22:new FormControl(""),
      p23: new FormControl("", Validators.required),
      ob23:new FormControl(""),
      p24: new FormControl("", Validators.required),
      ob24:new FormControl(""),
      p25: new FormControl("", Validators.required),
      ob25:new FormControl(""),
      p26: new FormControl("", Validators.required),
      ob26:new FormControl(""),
      p27: new FormControl("", Validators.required),
      ob27:new FormControl(""),
      p28: new FormControl("", Validators.required),
      ob28:new FormControl(""),
      p29: new FormControl("", Validators.required),
      ob29:new FormControl(""),
      p30: new FormControl("", Validators.required),
      ob30:new FormControl(""),
      p31: new FormControl("", Validators.required),
      ob31:new FormControl(""),
      //T3

      //T4
      p32: new FormControl("", Validators.required),
      ob32:new FormControl(""),
      p33: new FormControl("", Validators.required),
      ob33:new FormControl(""),
      p34: new FormControl("", Validators.required),
      ob34:new FormControl(""),
      p35: new FormControl("", Validators.required),
      ob35:new FormControl(""),
      p36: new FormControl("", Validators.required),
      ob36:new FormControl(""),
      p37: new FormControl("", Validators.required),
      ob37:new FormControl(""),
      p38: new FormControl("", Validators.required),
      ob38:new FormControl(""),
      p39: new FormControl("", Validators.required),
      ob39:new FormControl(""),
      p40: new FormControl("", Validators.required),
      ob40:new FormControl(""),
      p41: new FormControl("", Validators.required),
      ob41:new FormControl(""),
      p42: new FormControl("", Validators.required),
      ob42:new FormControl(""),
      p43: new FormControl("", Validators.required),
      ob43:new FormControl(""),
      p44: new FormControl("", Validators.required),
      ob44:new FormControl(""),
      p45: new FormControl("", Validators.required),
      ob45:new FormControl(""),
      //T4
      
    })

  } 

  calculoPhva1() {
    this.phva1 = (Number(this.formphva.value.p1) + Number(this.formphva.value.p2)+ Number(this.formphva.value.p3) +
                  Number(this.formphva.value.p4) + Number(this.formphva.value.p5)) / 5;
  }

  calculoPhva2() {
    this.phva2 = (Number(this.formphva.value.p15) + Number(this.formphva.value.p16)) / 2;
  }

  calculoPhva3() {
    this.phva3 = (Number(this.formphva.value.p17) + Number(this.formphva.value.p18)+ Number(this.formphva.value.p19) +
                Number(this.formphva.value.p20) + Number(this.formphva.value.p21)+ Number(this.formphva.value.p22) +
                Number(this.formphva.value.p23) + Number(this.formphva.value.p24)+ Number(this.formphva.value.p25) +
                Number(this.formphva.value.p26) + Number(this.formphva.value.p27)+ Number(this.formphva.value.p28) +
                Number(this.formphva.value.p29) + Number(this.formphva.value.p30)+ Number(this.formphva.value.p31)) / 15;
  }

  calculoPhva4() {
    this.phva4 = (Number(this.formphva.value.p32) + Number(this.formphva.value.p33)+ Number(this.formphva.value.p34) +
                Number(this.formphva.value.p35) + Number(this.formphva.value.p36)+ Number(this.formphva.value.p37) +
                Number(this.formphva.value.p38) + Number(this.formphva.value.p39)+ Number(this.formphva.value.p40) +
                Number(this.formphva.value.p41) + Number(this.formphva.value.p42)+ Number(this.formphva.value.p43) +
                Number(this.formphva.value.p44) + Number(this.formphva.value.p45)) / 14;
  }

  regResult(){
    let temp={
      phva1:this.phva1,
      phva2:this.phva2,
      phva3:this.phva3,
      phva4:this.phva4,
      companyName:sessionStorage.getItem('company'),
      emailAuditor:sessionStorage.getItem('auditor')
    } 
    this.phvaService.regResultPhva(temp as IPhva)
      .subscribe({
        next:reponse=>reponse=='ok'? alert('info registrada con exito'): alert('error al enviar datos'),
        error:error=>console.log(error),
        complete:()=> alert('info registrada con exito') 
      })  
  }

  ngOnInit(): void {
  }

}
