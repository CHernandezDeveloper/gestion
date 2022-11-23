import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IAdministrativas } from 'src/app/models/administrativas.model';
import { AdministrativasService } from 'src/app/services/administrativas.service';

@Component({
  selector: 'app-administrativas',
  templateUrl: './administrativas.component.html',
  styleUrls: ['./administrativas.component.scss']
})
export class AdministrativasComponent implements OnInit {

  verPrueba: boolean = false;
  formA: FormGroup;

  @Output()
  enviarJson = new EventEmitter();

  controlAD1: boolean = false;
  controlAD2: boolean = false;
  controlAD3: boolean = false;
  controlAD4: boolean = false;
  controlAD5: boolean = false;
  controlAD6: boolean = false;
  controlAD7: boolean = false;


  //Variables a enviar a la bd
  ad1: number = 0;
  ad2: number = 0;
  ad3: number = 0;
  ad4: number = 0;
  ad5: number = 0;
  ad6: number = 0;
  ad7: number = 0;


  constructor(private formBuilder: FormBuilder, private administrativasService: AdministrativasService) {
    this.formA = this.formBuilder.group(
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

  crearJson() {
    let acum41 = (Number(this.formA.value.p16) + Number(this.formA.value.p17) + Number(this.formA.value.p18) + Number(this.formA.value.p19)) / 4;
    let acum21 = (Number(this.formA.value.p3) + Number(this.formA.value.p4) + Number(this.formA.value.p5) + Number(this.formA.value.p6) + Number(this.formA.value.p7)) / 5;
    let acum22 = (Number(this.formA.value.p8) + Number(this.formA.value.p9)) / 2;
    let acum31 = (Number(this.formA.value.p10) + Number(this.formA.value.p11)) / 2;
    let acum32 = (Number(this.formA.value.p12) + Number(this.formA.value.p13) + Number(this.formA.value.p14)) / 3;
    let acum62 = (Number(this.formA.value.p34) + Number(this.formA.value.p35) + Number(this.formA.value.p36)) / 3;
    let acum61 = (Number(this.formA.value.p30) + Number(this.formA.value.p31) + Number(this.formA.value.p32) + Number(this.formA.value.p33)) / 4;

    let jsonAdministrativas = {
      r1: Number(this.formA.value.p16),
      r2: Number(this.formA.value.p20),
      r3: Number(this.formA.value.p12),
      r4s2: Number(this.formA.value.p1),
      r6: Number(this.formA.value.p1),
      r13: acum41,
      r14: Number(this.formA.value.p26),
      r15: acum21,
      r16: acum22,
      r20: acum31,
      r21: acum32,
      r22: Number(this.formA.value.p15),
      r37: Number(this.formA.value.p27),
      r38: Number(this.formA.value.p37),
      r39: Number(this.formA.value.p38),
      r42: acum62,
      r53: acum61,
      r55: Number(this.formA.value.p28)
    }
    this.enviarJson.emit(jsonAdministrativas);
    alert('Información Registrada con exito');
    this.formA.reset();
    this.controlAD1 = false;
    this.controlAD2 = false;
    this.controlAD3 = false;
    this.controlAD4 = false;
    this.controlAD5 = false;
    this.controlAD6 = false;
    this.controlAD7 = false;
  }

  calculoAD1() {
    this.ad1 = (Number(this.formA.value.p1) + Number(this.formA.value.p2)) / 2;
  }

  calculoAD2() {
    this.ad2 = (Number(this.formA.value.p3) + Number(this.formA.value.p4) + Number(this.formA.value.p5) +
      Number(this.formA.value.p6) + Number(this.formA.value.p7) + Number(this.formA.value.p8) + Number(this.formA.value.p9)) / 7;
  }

  calculoAD3() {
    this.ad3 = (Number(this.formA.value.p10) + Number(this.formA.value.p11) + Number(this.formA.value.p12) + Number(this.formA.value.p13)
      + Number(this.formA.value.p14)
      + Number(this.formA.value.p15)) / 6;
  }

  calculoAD4() {
    this.ad4 = (Number(this.formA.value.p16) + Number(this.formA.value.p17) + Number(this.formA.value.p18) + Number(this.formA.value.p19)
      + Number(this.formA.value.p20) + Number(this.formA.value.p21) + Number(this.formA.value.p22) + Number(this.formA.value.p23) +
      Number(this.formA.value.p24) + Number(this.formA.value.p25)) / 10;
  }

  calculoAD5() {
    this.ad5 = (Number(this.formA.value.p26) + Number(this.formA.value.p27) + Number(this.formA.value.p28) + Number(this.formA.value.p29)) / 4;
  }

  calculoAD6() {
    this.ad6 = (Number(this.formA.value.p30) + Number(this.formA.value.p31) + Number(this.formA.value.p32) + Number(this.formA.value.p33)
      + Number(this.formA.value.p34) + Number(this.formA.value.p35) + Number(this.formA.value.p36)) / 7;
  }

  calculoAD7() {
    this.ad7 = (Number(this.formA.value.p37) + Number(this.formA.value.p38)) / 2;
  }

  regResult() {
    let temp = {
      ad1: this.ad1, ad2: this.ad2, ad3: this.ad3, ad4: this.ad4,
      ad5: this.ad5,
      ad6: this.ad6,
      ad7: this.ad7,
      companyName: sessionStorage.getItem('company'),
      emailAuditor: sessionStorage.getItem('auditor')
    }

    this.administrativasService.regResultAdmin(temp as IAdministrativas).subscribe(
      {
        next: reponse => reponse == 'ok' ? alert('info registrada con exito') : alert('error al enviar datos'),
        error: error => console.log(error),
        complete: () => { alert('info registrada con exito') }

      }
    )

  }
}
