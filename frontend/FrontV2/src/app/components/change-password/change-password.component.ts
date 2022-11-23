import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUsuario } from 'src/app/models/registrar-usuario.model';
import { RegistrarUsuarioService } from 'src/app/services/registrar-usuario.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  nombreUsuario = sessionStorage.getItem('auditor')
  formChange: FormGroup;

  constructor(private fb: FormBuilder,
    private actualizarAuditor: RegistrarUsuarioService,
  ) {
    this.formChange = this.fb.group(
      {
        passwordVerify: ['', Validators.required],
        password: ['', Validators.required]

      }
    )
  }

  ngOnInit(): void {
  }

  onCambiarContrasena() {
    if (this.formChange.value.passwordVerify == sessionStorage.getItem('pass')) {

      let usuario: IUsuario = {
        userName: "",
        lastName: "",
        phone: "",
        email: sessionStorage.getItem('auditor'),
        password: this.formChange.value.password

      }
      this.actualizarAuditor.actualizarAuditor(usuario).subscribe(
        {
          next:(response)=>{
            if(response){
              alert("Contraseña cambiada con exito");
            }
            else{
              alert("No se pudo cambiar la contraseña");
            }
          }
        }
      )
    }
    else {
      alert('La contraseña actual, no es valida')
    }
  }

}
