import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  coursesData = [
    {
      'instituicao': 'Udacity',
      'curso': 'Desenvolvedor Web Full Stack',
      'data_ini': '',
      'data_fim': '',
      'icon': '',
      'link': 'https://br.udacity.com/course/full-stack-web-developer-nanodegree--nd004',
      'tags': ['']
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
