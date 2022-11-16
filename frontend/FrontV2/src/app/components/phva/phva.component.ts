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
    private phvaService:PhvaService
  ) { 

    this.formphva=this.formBuilder.group({
      p1: new FormControl("", Validators.required),
      ob1:new FormControl("",Validators.required),
      p2: new FormControl("", Validators.required),
      ob2:new FormControl("",Validators.required),
      p3: new FormControl("", Validators.required),
      ob3:new FormControl("",Validators.required),
      p4: new FormControl("", Validators.required),
      ob4:new FormControl("",Validators.required),
      p5: new FormControl("", Validators.required),
      ob5:new FormControl("",Validators.required),
      p6: new FormControl("", Validators.required),
      ob6:new FormControl("",Validators.required),
      p7: new FormControl("", Validators.required),
      ob7:new FormControl("",Validators.required),
      p8: new FormControl("", Validators.required),
      ob8:new FormControl("",Validators.required),
      p9: new FormControl("", Validators.required),
      ob9:new FormControl("",Validators.required),
      p10: new FormControl("", Validators.required),
      ob10:new FormControl("",Validators.required),
      p11: new FormControl("", Validators.required),
      ob11:new FormControl("",Validators.required),
      p12: new FormControl("", Validators.required),
      ob12:new FormControl("",Validators.required),
      p13: new FormControl("", Validators.required),
      ob13:new FormControl("",Validators.required),
      p14: new FormControl("", Validators.required),
      ob14:new FormControl("",Validators.required),
      //T1

      //T2
      p15: new FormControl("", Validators.required),
      ob15:new FormControl("",Validators.required),
      p16: new FormControl("", Validators.required),
      ob16:new FormControl("",Validators.required),
      //T2

      //T3  
      p17: new FormControl("", Validators.required),
      ob17:new FormControl("",Validators.required),
      p18: new FormControl("", Validators.required),
      ob18:new FormControl("",Validators.required),
      p19: new FormControl("", Validators.required),
      ob19:new FormControl("",Validators.required),
      p20: new FormControl("", Validators.required),
      ob20:new FormControl("",Validators.required),
      p21: new FormControl("", Validators.required),
      ob21:new FormControl("",Validators.required),
      p22: new FormControl("", Validators.required),
      ob22:new FormControl("",Validators.required),
      p23: new FormControl("", Validators.required),
      ob23:new FormControl("",Validators.required),
      p24: new FormControl("", Validators.required),
      ob24:new FormControl("",Validators.required),
      p25: new FormControl("", Validators.required),
      ob25:new FormControl("",Validators.required),
      p26: new FormControl("", Validators.required),
      ob26:new FormControl("",Validators.required),
      p27: new FormControl("", Validators.required),
      ob27:new FormControl("",Validators.required),
      p28: new FormControl("", Validators.required),
      ob28:new FormControl("",Validators.required),
      p29: new FormControl("", Validators.required),
      ob29:new FormControl("",Validators.required),
      p30: new FormControl("", Validators.required),
      ob30:new FormControl("",Validators.required),
      p31: new FormControl("", Validators.required),
      ob31:new FormControl("",Validators.required),
      //T3

      //T4
      p32: new FormControl("", Validators.required),
      ob32:new FormControl("",Validators.required),
      p33: new FormControl("", Validators.required),
      ob33:new FormControl("",Validators.required),
      p34: new FormControl("", Validators.required),
      ob34:new FormControl("",Validators.required),
      p35: new FormControl("", Validators.required),
      ob35:new FormControl("",Validators.required),
      p36: new FormControl("", Validators.required),
      ob36:new FormControl("",Validators.required),
      p37: new FormControl("", Validators.required),
      ob37:new FormControl("",Validators.required),
      p38: new FormControl("", Validators.required),
      ob38:new FormControl("",Validators.required),
      p39: new FormControl("", Validators.required),
      ob39:new FormControl("",Validators.required),
      p40: new FormControl("", Validators.required),
      ob40:new FormControl("",Validators.required),
      p41: new FormControl("", Validators.required),
      ob41:new FormControl("",Validators.required),
      p42: new FormControl("", Validators.required),
      ob42:new FormControl("",Validators.required),
      p43: new FormControl("", Validators.required),
      ob43:new FormControl("",Validators.required),
      p44: new FormControl("", Validators.required),
      ob44:new FormControl("",Validators.required),
      p45: new FormControl("", Validators.required),
      ob45:new FormControl("",Validators.required),
      //T4

      //T5
      p46: new FormControl("", Validators.required),
      ob46:new FormControl("",Validators.required),
      p47: new FormControl("", Validators.required),
      ob47:new FormControl("",Validators.required),
      p48: new FormControl("", Validators.required),
      ob48:new FormControl("",Validators.required),
      p49: new FormControl("", Validators.required),
      ob49:new FormControl("",Validators.required),
      p50: new FormControl("", Validators.required),
      ob50:new FormControl("",Validators.required),
      p51: new FormControl("", Validators.required),
      ob51:new FormControl("",Validators.required),
      p52: new FormControl("", Validators.required),
      ob52:new FormControl("",Validators.required),
      //T5

      //T6
      p53: new FormControl("", Validators.required),
      ob53:new FormControl("",Validators.required),
      p54: new FormControl("", Validators.required),
      ob54:new FormControl("",Validators.required),
      p55: new FormControl("", Validators.required),
      ob55:new FormControl("",Validators.required),
      p56: new FormControl("", Validators.required),
      ob56:new FormControl("",Validators.required),
      p57: new FormControl("", Validators.required),
      ob57:new FormControl("",Validators.required),
      p58: new FormControl("", Validators.required),
      ob58:new FormControl("",Validators.required),
      p59: new FormControl("", Validators.required),
      ob59:new FormControl("",Validators.required),
      p60: new FormControl("", Validators.required),
      ob60:new FormControl("",Validators.required),
      p61: new FormControl("", Validators.required),
      ob61:new FormControl("",Validators.required),
      p62: new FormControl("", Validators.required),
      ob62:new FormControl("",Validators.required),
      p63: new FormControl("", Validators.required),
      ob63:new FormControl("",Validators.required),
      p64: new FormControl("", Validators.required),
      ob64:new FormControl("",Validators.required),
      p65: new FormControl("", Validators.required),
      ob65:new FormControl("",Validators.required),
      //T6

      //T7
      p66: new FormControl("", Validators.required),
      ob66:new FormControl("",Validators.required),
      p67: new FormControl("", Validators.required),
      ob67:new FormControl("",Validators.required),
      p68: new FormControl("", Validators.required),
      ob68:new FormControl("",Validators.required),
      p69: new FormControl("", Validators.required),
      ob69:new FormControl("",Validators.required),
      p70: new FormControl("", Validators.required),
      ob70:new FormControl("",Validators.required),
      p71: new FormControl("", Validators.required),
      ob71:new FormControl("",Validators.required),
      p72: new FormControl("", Validators.required),
      ob72:new FormControl("",Validators.required),
      //T7
    })

  } 

  calculoT1() {
    this.t1 = (Number(this.formphva.value.p1) + Number(this.formphva.value.p2)+ Number(this.formphva.value.p3) +
                Number(this.formphva.value.p4) + Number(this.formphva.value.p5)+ Number(this.formphva.value.p6) +
                Number(this.formphva.value.p7) + Number(this.formphva.value.p8)+ Number(this.formphva.value.p9) +
                Number(this.formphva.value.p10) + Number(this.formphva.value.p11)+ Number(this.formphva.value.p12) +
                Number(this.formphva.value.p13) + Number(this.formphva.value.p14)) / 14;
  }

  calculoT2() {
    this.t2 = (Number(this.formphva.value.p15) + Number(this.formphva.value.p16)) / 2;
  }

  calculoT3() {
    this.t3 = (Number(this.formphva.value.p17) + Number(this.formphva.value.p18)+ Number(this.formphva.value.p19) +
                Number(this.formphva.value.p20) + Number(this.formphva.value.p21)+ Number(this.formphva.value.p22) +
                Number(this.formphva.value.p23) + Number(this.formphva.value.p24)+ Number(this.formphva.value.p25) +
                Number(this.formphva.value.p26) + Number(this.formphva.value.p27)+ Number(this.formphva.value.p28) +
                Number(this.formphva.value.p29) + Number(this.formphva.value.p30)+ Number(this.formphva.value.p31)) / 15;
  }

  calculoT4() {
    this.t4 = (Number(this.formphva.value.p32) + Number(this.formphva.value.p33)+ Number(this.formphva.value.p34) +
                Number(this.formphva.value.p35) + Number(this.formphva.value.p36)+ Number(this.formphva.value.p37) +
                Number(this.formphva.value.p38) + Number(this.formphva.value.p39)+ Number(this.formphva.value.p40) +
                Number(this.formphva.value.p41) + Number(this.formphva.value.p42)+ Number(this.formphva.value.p43) +
                Number(this.formphva.value.p44) + Number(this.formphva.value.p45)) / 14;
  }

  calculoT5() {
    this.t5 = (Number(this.formphva.value.p46) + Number(this.formphva.value.p47)+ Number(this.formphva.value.p48) +
                Number(this.formphva.value.p49) + Number(this.formphva.value.p50)+ Number(this.formphva.value.p51) +
                Number(this.formphva.value.p52)) / 5;
  }

  calculoT6() {
    this.t6 = (Number(this.formphva.value.p53) + Number(this.formphva.value.p54)+ Number(this.formphva.value.p55) +
                Number(this.formphva.value.p56) + Number(this.formphva.value.p57)+ Number(this.formphva.value.p58) +
                Number(this.formphva.value.p59) + Number(this.formphva.value.p60)+ Number(this.formphva.value.p61) +
                Number(this.formphva.value.p62) + Number(this.formphva.value.p63)+ Number(this.formphva.value.p64) +
                Number(this.formphva.value.p65)) / 13;
  }

  calculoT7() {
    this.t7 = (Number(this.formphva.value.p66) + Number(this.formphva.value.p67)+ Number(this.formphva.value.p68) +
                Number(this.formphva.value.p69) + Number(this.formphva.value.p70)+ Number(this.formphva.value.p71) +
                Number(this.formphva.value.p72)) / 7;
  }

  regResult(){
    let temp={
      t1:this.t1,
      t2:this.t2,
      t3:this.t3,
      t4:this.t4,
      t5:this.t5,
      t6:this.t6,
      t7:this.t7,
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