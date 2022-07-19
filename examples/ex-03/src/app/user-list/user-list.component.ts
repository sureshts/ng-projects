import { Component, OnInit } from '@angular/core';
import { User } from '../user.modal';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
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

  ngOnInit(): void {
    this.filterUsers = this.users.filter((u) => {
      if (u.gender === 'male') {
        return true;
      }
      return false;
    });
  }
}
