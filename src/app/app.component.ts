import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name = 'Alan Duarte dos Santos';
  email = 'alanduartes@gmail.com';
  fone = '(41) 9 9667-3259';

  // The description window is opened?
  description_open = true;
  // Which menu item is selected?
  selected = '';
  // To show description (transform)
  style = {};

  toggleDescription(selected = '') {
    let opened = <HTMLElement> document.getElementsByClassName('opened')[0];

    this.selected = selected;

    if(this.description_open == true) {

      this.style = {
        "transform": "translate(0,0)"
      };

      this.description_open = false;

    } else {

      this.style = {
        "transform": "translate(0,100%)"
      };

      this.selected = '';

      this.description_open = true;

    }

    return this.style;
  }
}
