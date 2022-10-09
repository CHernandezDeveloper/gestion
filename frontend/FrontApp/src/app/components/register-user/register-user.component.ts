//import { registrarUsuario } from 'src/app/services/registrar-usuario.service';
import { FormGroup,FormBuilder,Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegistrarUsuarioService } from 'src/app/services/registrar-usuario.service';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  registrarUsuario:FormGroup = new FormGroup({});
  created : boolean = false;
  constructor(private formBuilder:FormBuilder, private userService : RegistrarUsuarioService) {}

  ngOnInit(): void {
    this.registrarUsuario=this.formBuilder.group({
      userName:new FormControl("",[Validators.required,Validators.minLength(6)]),
      lastName:new FormControl("",[Validators.required,Validators.minLength(6)]),
      password: new FormControl("",[Validators.required,Validators.minLength(6)]),
      email:new FormControl("",[Validators.required,Validators.email,Validators.minLength(6)]),
      phone: new FormControl("",[Validators.required,Validators.minLength(10)])
    })
  }

  registerUser(){
    this.created = false;
    this.userService.registerAuditor(this.registrarUsuario.value).subscribe(
      (response)=>{
        console.log(response)
        if(response == null){
          this.created = !this.created;
        }

      })
  }


}
