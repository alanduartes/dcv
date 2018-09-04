import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  schoolData = [
    {
      'instituicao': 'Universidade Federal do Paraná',
      'sigla': 'UFPR',
      'curso' : 'Tecnologia em análise e Desenvolvimento de Sistemas',
      'conclusao': '2013',
      'icon' : 'assets/images/icon/ufpr.png',
      'tcc': ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
