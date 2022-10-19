import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  faPower = faPowerOff;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    sessionStorage.removeItem("login");
    sessionStorage.removeItem("auditor");
    this.router.navigateByUrl("login")
  }
}
