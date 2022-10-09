import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  activeRegisterInfoEm:boolean = false;
  start : boolean = true;
  results : boolean = false;
  profile : boolean = false;


  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  activeStart(){
    this.activeRegisterInfoEm = !this.activeRegisterInfoEm;
    this.start = false;
    this.results = false;
    this.profile = false;
  }
  activeHome(){
    this.activeRegisterInfoEm = false;
    this.start = !this.start;
    this.results = false;
    this.profile = false;
  }
  activeResults(){
    this.activeRegisterInfoEm = false;
    this.start = false;
    this.results = true;
    this.profile = false;
  }
  activeProfile(){
    this.activeRegisterInfoEm = false;
    this.start = false;
    this.results = false;
    this.profile = true;
  }
  logout(){
    sessionStorage.removeItem("login");
    sessionStorage.removeItem("auditor");
    this.router.navigateByUrl("login")
  }
}
