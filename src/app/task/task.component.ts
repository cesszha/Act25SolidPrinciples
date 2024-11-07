import { Component } from '@angular/core';
abstract class Task {
  abstract execute(): void;
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements Task {
 execute(): void {
    console.log ('Simple task');
}
}
