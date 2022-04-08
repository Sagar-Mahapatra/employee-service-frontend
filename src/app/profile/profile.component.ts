import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name!: string;
  clickBtn = 'waves-effect waves-light btn-large';
  btnColor = 'red';
  btnApperence: boolean = true;
  cars: string[] = ['Audi', 'Mercediz'];
  updated:boolean=true;

  constructor() {
    console.log('ProfileComponent constructor executed...');
    setTimeout(() => {
      if (this.name == 'sagar') {
        this.name = 'a developer';
      } else {
        this.name = 'sagar';
      }
    }, 2000);
    const s = ['a developer', 'sagar'];
    this.name = s[Math.floor(Math.random() * 2)];
  }

  ngOnInit(): void {
  }

  change() {
    console.log('ProfileComponent change() executed...');
    if (this.name == 'sagar') {
      this.name = 'a developer';
    } else {
      this.name = 'sagar';
    }

    if (this.btnApperence == true) {
      this.btnApperence = false;
    } else {
      this.btnApperence = true;
    }
  }

}

