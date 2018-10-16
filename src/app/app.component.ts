import { Component } from '@angular/core';
import { Profile } from './models/profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  profile: Profile = new Profile();
  session = localStorage.setItem('profile', JSON.stringify(this.profile));

}
