import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;

  constructor() { }

  ngOnInit() {
    this.name = "Chung Le"
    this.age = 28;
    this.email = "chung.le.rhj@gmx.com";
  }

}
