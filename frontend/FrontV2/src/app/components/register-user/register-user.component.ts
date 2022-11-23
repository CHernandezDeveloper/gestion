import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrarUsuarioService } from 'src/app/services/registrar-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  registrarUsuario:FormGroup = new FormGroup({});
  created : boolean = false;
  constructor(private formBuilder:FormBuilder, private userService : RegistrarUsuarioService,private router:Router) {}

  ngOnInit(): void {
    this.registrarUsuario=this.formBuilder.group({
      userName:new FormControl("",[Validators.required]),
      lastName:new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required,Validators.minLength(6)]),
      email:new FormControl("",[Validators.required,Validators.email,Validators.minLength(6)]),
      phone: new FormControl("",[Validators.minLength(10)])
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
    alert('Usuario registrado con exito')  
    this.router.navigate(['/login'])
  }


}
