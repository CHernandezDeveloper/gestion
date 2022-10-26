import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-reg-info-empresa',
  templateUrl: './reg-info-empresa.component.html',
  styleUrls: ['./reg-info-empresa.component.scss']
})
export class RegInfoEmpresaComponent implements OnInit {

  formInfoEmpresa : FormGroup = new FormGroup({});
  registered: boolean = false;

  constructor(private formBuilder: FormBuilder, private companyService:CompanyService) { }


  ngOnInit(): void {

    this.formInfoEmpresa = this.formBuilder.group(
      {
        name : new FormControl("",[Validators.required]),
        nit : new FormControl("",[Validators.required,Validators.pattern("^([0-9]{9}-[0-9]{1})?$")]),
        type: new FormControl("",[Validators.required]),
        mision : new FormControl("",[Validators.required]),
        contact : new FormControl("",[Validators.required,Validators.pattern("^([0-9]{10})?$")]),
        email: new FormControl(""),
        emailAuditor : sessionStorage.getItem("auditor"),
      }
    )
  }


  registerCompany(){

    this.registered = false;

    this.companyService.registerCompany(this.formInfoEmpresa.value).subscribe(
      {
        next:(response)=>{

          if(response == null){
            this.registered = false;
            alert('Error al  Registrar la Empresa')
          }else{
            this.registered = true;

            if(sessionStorage.getItem('company')){
              sessionStorage.removeItem('companuy');
            }
            sessionStorage.setItem('company',this.formInfoEmpresa.value.name);

            alert('Empresa Registrada')

          }
        },
        error:(error) => console.log(error)
      }
    )


  }
}
