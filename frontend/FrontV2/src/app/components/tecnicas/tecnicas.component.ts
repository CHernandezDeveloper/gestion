import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TecnicasService } from '../../services/tecnicas.service';
import { ITecnicas } from '../../models/tecnicas';

@Component({
  selector: 'app-tecnicas',
  templateUrl: './tecnicas.component.html',
  styleUrls: ['./tecnicas.component.scss']
})
export class TecnicasComponent implements OnInit {

  verPrueba: boolean = false;
  formT: FormGroup;

  @Output()
  enviarJsonTecnicas = new EventEmitter();

  controlT1: boolean = false;
  controlT2: boolean = false;
  controlT3: boolean = false;
  controlT4: boolean = false;
  controlT5: boolean = false;
  controlT6: boolean = false;
  controlT7: boolean = false;

  t1: number = 0;
  t2: number = 0;
  t3: number = 0;
  t4: number = 0;
  t5: number = 0;
  t6: number = 0;
  t7: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private tecnicasService: TecnicasService

  ) {

    this.formT = this.formBuilder.group({
      //T1
      p1: new FormControl("", Validators.required),
      ob1: new FormControl(""),
      p2: new FormControl("", Validators.required),
      ob2: new FormControl(""),
      p3: new FormControl("", Validators.required),
      ob3: new FormControl(""),
      p4: new FormControl("", Validators.required),
      ob4: new FormControl(""),
      p5: new FormControl("", Validators.required),
      ob5: new FormControl(""),
      p6: new FormControl("", Validators.required),
      ob6: new FormControl(""),
      p7: new FormControl("", Validators.required),
      ob7: new FormControl(""),
      p8: new FormControl("", Validators.required),
      ob8: new FormControl(""),
      p9: new FormControl("", Validators.required),
      ob9: new FormControl(""),
      p10: new FormControl("", Validators.required),
      ob10: new FormControl(""),
      p11: new FormControl("", Validators.required),
      ob11: new FormControl(""),
      p12: new FormControl("", Validators.required),
      ob12: new FormControl(""),
      p13: new FormControl("", Validators.required),
      ob13: new FormControl(""),
      p14: new FormControl("", Validators.required),
      ob14: new FormControl(""),
      //T1

      //T2
      p15: new FormControl("", Validators.required),
      ob15: new FormControl(""),
      p16: new FormControl("", Validators.required),
      ob16: new FormControl(""),
      //T2

      //T3
      p17: new FormControl("", Validators.required),
      ob17: new FormControl(""),
      p18: new FormControl("", Validators.required),
      ob18: new FormControl(""),
      p19: new FormControl("", Validators.required),
      ob19: new FormControl(""),
      p20: new FormControl("", Validators.required),
      ob20: new FormControl(""),
      p21: new FormControl("", Validators.required),
      ob21: new FormControl(""),
      p22: new FormControl("", Validators.required),
      ob22: new FormControl(""),
      p23: new FormControl("", Validators.required),
      ob23: new FormControl(""),
      p24: new FormControl("", Validators.required),
      ob24: new FormControl(""),
      p25: new FormControl("", Validators.required),
      ob25: new FormControl(""),
      p26: new FormControl("", Validators.required),
      ob26: new FormControl(""),
      p27: new FormControl("", Validators.required),
      ob27: new FormControl(""),
      p28: new FormControl("", Validators.required),
      ob28: new FormControl(""),
      p29: new FormControl("", Validators.required),
      ob29: new FormControl(""),
      p30: new FormControl("", Validators.required),
      ob30: new FormControl(""),
      p31: new FormControl("", Validators.required),
      ob31: new FormControl(""),
      //T3

      //T4
      p32: new FormControl("", Validators.required),
      ob32: new FormControl(""),
      p33: new FormControl("", Validators.required),
      ob33: new FormControl(""),
      p34: new FormControl("", Validators.required),
      ob34: new FormControl(""),
      p35: new FormControl("", Validators.required),
      ob35: new FormControl(""),
      p36: new FormControl("", Validators.required),
      ob36: new FormControl(""),
      p37: new FormControl("", Validators.required),
      ob37: new FormControl(""),
      p38: new FormControl("", Validators.required),
      ob38: new FormControl(""),
      p39: new FormControl("", Validators.required),
      ob39: new FormControl(""),
      p40: new FormControl("", Validators.required),
      ob40: new FormControl(""),
      p41: new FormControl("", Validators.required),
      ob41: new FormControl(""),
      p42: new FormControl("", Validators.required),
      ob42: new FormControl(""),
      p43: new FormControl("", Validators.required),
      ob43: new FormControl(""),
      p44: new FormControl("", Validators.required),
      ob44: new FormControl(""),
      p45: new FormControl("", Validators.required),
      ob45: new FormControl(""),
      //T4

      //T5
      p46: new FormControl("", Validators.required),
      ob46: new FormControl(""),
      p47: new FormControl("", Validators.required),
      ob47: new FormControl(""),
      p48: new FormControl("", Validators.required),
      ob48: new FormControl(""),
      p49: new FormControl("", Validators.required),
      ob49: new FormControl(""),
      p50: new FormControl("", Validators.required),
      ob50: new FormControl(""),
      p51: new FormControl("", Validators.required),
      ob51: new FormControl(""),
      p52: new FormControl("", Validators.required),
      ob52: new FormControl(""),
      //T5

      //T6
      p53: new FormControl("", Validators.required),
      ob53: new FormControl(""),
      p54: new FormControl("", Validators.required),
      ob54: new FormControl(""),
      p55: new FormControl("", Validators.required),
      ob55: new FormControl(""),
      p56: new FormControl("", Validators.required),
      ob56: new FormControl(""),
      p57: new FormControl("", Validators.required),
      ob57: new FormControl(""),
      p58: new FormControl("", Validators.required),
      ob58: new FormControl(""),
      p59: new FormControl("", Validators.required),
      ob59: new FormControl(""),
      p60: new FormControl("", Validators.required),
      ob60: new FormControl(""),
      p61: new FormControl("", Validators.required),
      ob61: new FormControl(""),
      p62: new FormControl("", Validators.required),
      ob62: new FormControl(""),
      p63: new FormControl("", Validators.required),
      ob63: new FormControl(""),
      p64: new FormControl("", Validators.required),
      ob64: new FormControl(""),
      p65: new FormControl("", Validators.required),
      ob65: new FormControl(""),
      //T6

      //T7
      p66: new FormControl("", Validators.required),
      ob66: new FormControl(""),
      p67: new FormControl("", Validators.required),
      ob67: new FormControl(""),
      p68: new FormControl("", Validators.required),
      ob68: new FormControl(""),
      p69: new FormControl("", Validators.required),
      ob69: new FormControl(""),
      p70: new FormControl("", Validators.required),
      ob70: new FormControl(""),
      p71: new FormControl("", Validators.required),
      ob71: new FormControl(""),
      p72: new FormControl("", Validators.required),
      ob72: new FormControl(""),
      //T7
    })
  }

  ngOnInit(): void {
  }

  crearJsonTecnicas() {
    let acumuT46 = (Number(this.formT.value.p43) + Number(this.formT.value.p44)) / 2

    let acumuT11 = (Number(this.formT.value.p1) + Number(this.formT.value.p2)) / 2

    let acumuT32 = (Number(this.formT.value.p23) + Number(this.formT.value.p24) + Number(this.formT.value.p25) +
      Number(this.formT.value.p26) + Number(this.formT.value.p27) + Number(this.formT.value.p28) +
      Number(this.formT.value.p29) + Number(this.formT.value.p30) + Number(this.formT.value.p31)) / 9

    let acumuT41 = (Number(this.formT.value.p32) + Number(this.formT.value.p33) + Number(this.formT.value.p34) +
      Number(this.formT.value.p35)) / 4

    let acumuT51 = (Number(this.formT.value.p46) + Number(this.formT.value.p47) + Number(this.formT.value.p48)) / 3

    let acumuT52 = (Number(this.formT.value.p49) + Number(this.formT.value.p50) + Number(this.formT.value.p51) + Number(this.formT.value.p52)) / 4

    let acumuT61 = (Number(this.formT.value.p53) + Number(this.formT.value.p54) + Number(this.formT.value.p55)) / 3

    let acumuT62 = (Number(this.formT.value.p56) + Number(this.formT.value.p57) + Number(this.formT.value.p58) +
      Number(this.formT.value.p59) + Number(this.formT.value.p60) + Number(this.formT.value.p61) +
      Number(this.formT.value.p62) + Number(this.formT.value.p63) + Number(this.formT.value.p64)) / 9

    let acumuT12 = (Number(this.formT.value.p3) + Number(this.formT.value.p4) + Number(this.formT.value.p5) + Number(this.formT.value.p6) + Number(this.formT.value.p7) + Number(this.formT.value.p8)) / 6

    let acumuT14 = (Number(this.formT.value.p10) + Number(this.formT.value.p11) + Number(this.formT.value.p12) + Number(this.formT.value.p13)) / 4;

    let acumuT21 = (Number(this.formT.value.p15) + Number(this.formT.value.p16)) / 2;

    let acumuT44 = (Number(this.formT.value.p38) + Number(this.formT.value.p39) + Number(this.formT.value.p40) + Number(this.formT.value.p41)) / 4;

    let acumuT42 = (Number(this.formT.value.p32) + Number(this.formT.value.p33) + Number(this.formT.value.p34) + Number(this.formT.value.p35)) / 4

    let json = {
      r8: Number(this.formT.value.p69),
      r17: acumuT42,
      r19: acumuT46,
      r23: acumuT11,
      r26: acumuT32,
      r27: acumuT41,
      r29: acumuT51,
      r30: acumuT52,
      r32: acumuT62,
      r31: acumuT61,
      r48: acumuT12,
      r49: acumuT14,
      r50: acumuT21,
      r51: acumuT44,
      r12: Number(this.formT.value.p67),
      r18: Number(this.formT.value.p37),
      r24: Number(this.formT.value.p8),
      r25: Number(this.formT.value.p9),
      r28: Number(this.formT.value.p42),
      r33: Number(this.formT.value.p65),
      r34: Number(this.formT.value.p67),
      r35: Number(this.formT.value.p68),
      r36: Number(this.formT.value.p72),
      r43: Number(this.formT.value.p71),
      r44: Number(this.formT.value.p63),
      r45: Number(this.formT.value.p38),
      r47: Number(this.formT.value.p70),
      r52: Number(this.formT.value.p45)

    }

    this.enviarJsonTecnicas.emit(json);
    alert('Información registrada con exito');
    this.formT.reset();
    this.controlT1=false;
    this.controlT2=false;
    this.controlT3=false;
    this.controlT4=false;
    this.controlT5=false;
    this.controlT6=false;
    this.controlT7=false;

  }

  calculoT1() {
    this.t1 = (Number(this.formT.value.p1) + Number(this.formT.value.p2) + Number(this.formT.value.p3) +
      Number(this.formT.value.p4) + Number(this.formT.value.p5) + Number(this.formT.value.p6) +
      Number(this.formT.value.p7) + Number(this.formT.value.p8) + Number(this.formT.value.p9) +
      Number(this.formT.value.p10) + Number(this.formT.value.p11) + Number(this.formT.value.p12) +
      Number(this.formT.value.p13) + Number(this.formT.value.p14)) / 14;
  }

  calculoT2() {
    this.t2 = (Number(this.formT.value.p15) + Number(this.formT.value.p16)) / 2;
  }

  calculoT3() {
    this.t3 = (Number(this.formT.value.p17) + Number(this.formT.value.p18) + Number(this.formT.value.p19) +
      Number(this.formT.value.p20) + Number(this.formT.value.p21) + Number(this.formT.value.p22) +
      Number(this.formT.value.p23) + Number(this.formT.value.p24) + Number(this.formT.value.p25) +
      Number(this.formT.value.p26) + Number(this.formT.value.p27) + Number(this.formT.value.p28) +
      Number(this.formT.value.p29) + Number(this.formT.value.p30) + Number(this.formT.value.p31)) / 15;
  }

  calculoT4() {
    this.t4 = (Number(this.formT.value.p32) + Number(this.formT.value.p33) + Number(this.formT.value.p34) +
      Number(this.formT.value.p35) + Number(this.formT.value.p36) + Number(this.formT.value.p37) +
      Number(this.formT.value.p38) + Number(this.formT.value.p39) + Number(this.formT.value.p40) +
      Number(this.formT.value.p41) + Number(this.formT.value.p42) + Number(this.formT.value.p43) +
      Number(this.formT.value.p44) + Number(this.formT.value.p45)) / 14;
  }

  calculoT5() {
    this.t5 = (Number(this.formT.value.p46) + Number(this.formT.value.p47) + Number(this.formT.value.p48) +
      Number(this.formT.value.p49) + Number(this.formT.value.p50) + Number(this.formT.value.p51) +
      Number(this.formT.value.p52)) / 5;
  }

  calculoT6() {
    this.t6 = (Number(this.formT.value.p53) + Number(this.formT.value.p54) + Number(this.formT.value.p55) +
      Number(this.formT.value.p56) + Number(this.formT.value.p57) + Number(this.formT.value.p58) +
      Number(this.formT.value.p59) + Number(this.formT.value.p60) + Number(this.formT.value.p61) +
      Number(this.formT.value.p62) + Number(this.formT.value.p63) + Number(this.formT.value.p64) +
      Number(this.formT.value.p65)) / 13;
  }

  calculoT7() {
    this.t7 = (Number(this.formT.value.p66) + Number(this.formT.value.p67) + Number(this.formT.value.p68) +
      Number(this.formT.value.p69) + Number(this.formT.value.p70) + Number(this.formT.value.p71) +
      Number(this.formT.value.p72)) / 7;
  }

  regResult() {
    let temp = {
      t1: this.t1,
      t2: this.t2,
      t3: this.t3,
      t4: this.t4,
      t5: this.t5,
      t6: this.t6,
      t7: this.t7,
      companyName: sessionStorage.getItem('company'),
      emailAuditor: sessionStorage.getItem('auditor')
    }
    this.tecnicasService.regResultTecnicas(temp as ITecnicas)
      .subscribe({
        next: reponse => reponse == 'ok' ? alert('info registrada con exito') : alert('error al enviar datos'),
        error: error => console.log(error),
        complete: () => alert('info registrada con exito')
      })
  }

}
