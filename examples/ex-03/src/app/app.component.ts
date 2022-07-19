import { Component, OnInit } from '@angular/core';
import { User } from './user.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ex-03';
  filterText: string = '';
  filterUsers: User[] = [];
  users: User[] = [
    {
      id: 1,
      name: 'A1',
      age: 20,
      gender: 'male',
    },
    {
      id: 2,
      name: 'A2',
      age: 30,
      gender: 'male',
    },
    {
      id: 3,
      name: 'A3',
      age: 27,
      gender: 'female',
    },
    {
      id: 4,
      name: 'A4',
      age: 20,
      gender: 'male',
    },
  ];

  ngOnInit() {}
  onAdd() {
    this.users[0].gender = 'female';
    const copy = Object.assign([], this.users);

    copy.push({
      id: 5,
      name: 'A5',
      age: 40,
      gender: 'male',
    });

    this.users = copy;
  }
}
