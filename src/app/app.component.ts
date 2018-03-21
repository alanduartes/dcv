import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Alan Duarte dos Santos'
  email = 'alanduartes@gmail.com'
  fone = '(41) 9 9667-3259'

  toggle(info) {
    
    if (info == 'E') { // Education
      alert('ED');
    } else if (info == 'X') { // Experience
      alert('EX');
    } else if (info == 'C') { // Courses
      alert('C');
    } else if (info == 'K') { // Knowledge
      alert('K');
    } else if (info == 'L') { // Language
      alert('L');
    }
  }
}
