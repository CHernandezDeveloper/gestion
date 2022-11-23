import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IPhva } from 'src/app/models/phva';
import { PhvaService } from 'src/app/services/phva.service';


@Component({
  selector: 'app-phva',
  templateUrl: './phva.component.html',
  styleUrls: ['./phva.component.scss']
})
export class PhvaComponent implements OnInit {

  verPrueba: boolean = false;
  formphva: FormGroup;

  controlPhva1: boolean = false;
  controlPhva2: boolean = false;
  controlPhva3: boolean = false;
  controlPhva4: boolean = false;

  phva1: number = 0;
  phva2: number = 0;
  phva3: number = 0;
  phva4: number = 0;

  @Output() enviarJson = new EventEmitter;

  constructor(
    private formBuilder: FormBuilder,
    private phvaService: PhvaService
  ) {

    this.formphva = this.formBuilder.group({
      //PHVA1
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

      //PHVA2
      p6: new FormControl("", Validators.required),
      ob6: new FormControl(""),
      p7: new FormControl("", Validators.required),
      ob7: new FormControl(""),
      p8: new FormControl("", Validators.required),
      ob8: new FormControl(""),

      //PHVA3
      p9: new FormControl("", Validators.required),
      ob9: new FormControl(""),
      p10: new FormControl("", Validators.required),
      ob10: new FormControl(""),
      p11: new FormControl("", Validators.required),
      ob11: new FormControl(""),

      //PHVA4
      p12: new FormControl("", Validators.required),
      ob12: new FormControl(""),
      p13: new FormControl("", Validators.required),
      ob13: new FormControl(""),

    })

  }

  jason() {

    let acumur4 = (Number(this.formphva.value.p1) + Number(this.formphva.value.p4)) / 2

    let acumur41 = (Number(this.formphva.value.p9) + Number(this.formphva.value.p10) + Number(this.formphva.value.p11) + Number(this.formphva.value.p12)) / 4

    let json = {
      r4: acumur4,
      r7: Number(this.formphva.value.p1),
      r11: Number(this.formphva.value.p6),
      r40: Number(this.formphva.value.p8),
      r41: acumur41,
      r46: Number(this.formphva.value.p13)
    }
    this.enviarJson.emit(json);

    this.controlPhva1 = false;
    this.controlPhva2 = false;
    this.controlPhva3 = false;
    this.controlPhva4 = false;
  }

  calculoPhva1() {
    this.phva1 = (Number(this.formphva.value.p1) + Number(this.formphva.value.p2) + Number(this.formphva.value.p3) +
      Number(this.formphva.value.p4) + Number(this.formphva.value.p5)) / 5;
  }

  calculoPhva2() {
    this.phva2 = (Number(this.formphva.value.p15) + Number(this.formphva.value.p16)) / 2;
  }

  calculoPhva3() {
    this.phva3 = (Number(this.formphva.value.p17) + Number(this.formphva.value.p18) + Number(this.formphva.value.p19) +
      Number(this.formphva.value.p20) + Number(this.formphva.value.p21) + Number(this.formphva.value.p22) +
      Number(this.formphva.value.p23) + Number(this.formphva.value.p24) + Number(this.formphva.value.p25) +
      Number(this.formphva.value.p26) + Number(this.formphva.value.p27) + Number(this.formphva.value.p28) +
      Number(this.formphva.value.p29) + Number(this.formphva.value.p30) + Number(this.formphva.value.p31)) / 15;
  }

  calculoPhva4() {
    this.phva4 = (Number(this.formphva.value.p32) + Number(this.formphva.value.p33) + Number(this.formphva.value.p34) +
      Number(this.formphva.value.p35) + Number(this.formphva.value.p36) + Number(this.formphva.value.p37) +
      Number(this.formphva.value.p38) + Number(this.formphva.value.p39) + Number(this.formphva.value.p40) +
      Number(this.formphva.value.p41) + Number(this.formphva.value.p42) + Number(this.formphva.value.p43) +
      Number(this.formphva.value.p44) + Number(this.formphva.value.p45)) / 14;
  }

  regResult() {
    let temp = {
      phva1: this.phva1,
      phva2: this.phva2,
      phva3: this.phva3,
      phva4: this.phva4,
      companyName: sessionStorage.getItem('company'),
      emailAuditor: sessionStorage.getItem('auditor')
    }

    // this.phvaService.regResultPhva(temp as IPhva)
    //   .subscribe({
    //     next: reponse => reponse == 'ok' ? alert('info registrada con exito') : alert('error al enviar datos'),
    //     error: error => console.log(error),
    //     complete: () => alert('info registrada con exito')
    //   })
  }

  ngOnInit(): void {
  }

}
