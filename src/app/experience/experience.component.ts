import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  expData = [
    {
      'empresa': 'Atual Card',
      'Funcao': 'Programador PHP',
      'data_ini': '2015-10-01',
      'data_fim': '',
      'descricao': '',
      'img': '',
      'tags': ['PHP', 'MySQL', 'Zend Framework 1', 'Zend Framework 2',
              'Zend Framework 3', 'Javascript', 'Ajax', 'jQuery',
              'R', 'Windows', 'Linux', 'SVN']
    },
    {
      'empresa': 'Corinfo',
      'Funcao': 'Programador PHP',
      'data_ini': '2014-09-01',
      'data_fim': '2015-09-20',
      'descricao': '',
      'img': '',
      'tags': ['PHP', 'MySQL', 'Javascript', 'Ajax', 'jQuery', 'Windows',
              'SCRUM', 'CSS', 'HTML', 'Google APIs', 'GIT', 'FileZilla',
              'TeamViewer']
    },
    {
      'empresa': 'Abix Tecnologia',
      'Funcao': 'Programador PHP',
      'data_ini': '2012-09-01',
      'data_fim': '2014-08-20',
      'descricao': '',
      'img': '',
      'tags': ['PHP', 'MySQL', 'Javascript', 'Ajax', 'jQuery', 'Linux',
              'SCRUM', 'CSS', 'HTML', 'Apache', 'Modelagem', 'Análise',
              'Oracle', 'Google Analytics API']
    },
    {
      'empresa': 'Daiken Software',
      'Funcao': 'Estagiário',
      'data_ini': '2011-08-01',
      'data_fim': '2012-09-20',
      'descricao': '',
      'img': '',
      'tags': ['PostgreSQL', 'Java EE', 'C++', 'SCRUM']
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
