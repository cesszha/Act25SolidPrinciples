import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface User {
  name: string;
  age: number;
  }
  @Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-user-list',
  template: `
    <ul>
      <li *ngFor="let user of users">{{ user.name }}</li>
    </ul>
  `
})
export class UserListComponent {
   users: User[] = [
    {
      name: "Taylor Swift",
      age: 35,

    },{
      name: "John Mayer",
      age: 46,
    },{
      name: "Kim Kardashian",
      age: 44,
    }
  ];
}
