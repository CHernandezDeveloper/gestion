import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrarUsuarioService } from 'src/app/services/registrar-usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginUsuario:FormGroup;
  loginBand : boolean = false;

  constructor(private fb:FormBuilder,private router:Router,private registrarUsuarioService:RegistrarUsuarioService) {
      this.loginUsuario=this.fb.group({
        email:new FormControl("",[Validators.required,Validators.email]),
        password:new FormControl("",[Validators.required]),
      })
    }

  ngOnInit(): void {
  }

  loginUser(){

    this.registrarUsuarioService.login(this.loginUsuario.value).subscribe(
      {
        next:(response) => {
          console.log(response)
          if(response != null){
            this.router.navigateByUrl("home")
            sessionStorage.setItem("login","access")
            sessionStorage.setItem("auditor",response.email)
            this.loginBand = false;
          }
          else{
            console.log("No se ha podido iniciar sesion")
            this.loginBand = true;
          }

        },
        error:(error) => console.log(error)
      }
      )
    }

}
