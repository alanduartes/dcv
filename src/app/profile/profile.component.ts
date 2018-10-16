import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:Profile = null;
  constructor() { }

  ngOnInit() 
  {
    this.profile = JSON.parse(localStorage.getItem('profile'));

    let refreshInterval = setInterval(() => {
      this.startAnimation();
    }, 600);
  }


  startAnimation()
  {
      const el = document.getElementsByClassName('pic');
      for (let i = 0; i < el.length; i++) {
        if (el[i].classList.contains('pic-started')) {
          el[i].classList.remove('pic-started');
          if (typeof el[i+1] !== 'undefined')
            el[++i].classList.add('pic-started');
          else
            el[0].classList.add('pic-started');
        }
      }
      
      
  }

}
