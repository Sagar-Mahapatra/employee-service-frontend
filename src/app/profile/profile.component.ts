import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnChanges {

  name!: string;
  clickBtn = 'waves-effect waves-light btn-large';
  btnColor = 'red';
  btnApperence: boolean = true;
  cars: string[] = ['Audi', 'Mercediz'];
  updated: boolean = false;

  constructor() {
    console.log('ProfileComponent constructor() executed...');
  }

  ngOnInit(): void {
    console.log('ProfileComponent ngOnInit() executed...');
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
  ngOnChanges(value: SimpleChanges) {
    console.log('ProfileComponent ngOnChanges() executed...' + value);
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
  displayUpdate() {
    if (this.updated == true) {
      this.updated = false;
    } else {
      this.updated = true;
    }

  }

}

