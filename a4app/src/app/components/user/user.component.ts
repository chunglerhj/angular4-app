import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  posts: Post[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.name = "Chung Le"
    this.age = 28;
    this.email = "chung.le.rhj@gmx.com";
    this.address = {
      street: "Nguyen",
      city: "Hanoi",
      state: "Vietnam"
    }
    this.hobbies = [
      "Coding",
      "Playing"
    ]

    this.userService.getData().subscribe((posts) => {
      this.posts = posts;
    })
  }

  onClick() {
    this.age++;
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
    return false;
  }

}

interface Address {
  street: string,
  city: string,
  state: string
}

interface Post {
  id: number,
  title: string,
  body: string
}
