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
  }

}
