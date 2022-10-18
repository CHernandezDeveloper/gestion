import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  columns = [
    {
      niveles : "Nivel 1",
      descripcion: "Descripcion nivel 1"
    },
    {
      niveles : "Nivel 2",
      descripcion: "Descripcion nivel 2"
    },
    {
      niveles : "Nivel 3",
      descripcion: "Descripcion nivel 2"
    },{
      niveles : "Nivel 4",
      descripcion: "Descripcion nivel 2"
    },
    {
      niveles : "Nivel 5",
      descripcion: "Descripcion nivel 2"
    }
  ];
  displayedColumns:string[]=['niveles','descripcion']
  constructor() { }

  ngOnInit(): void {
  }

}
