import { Component } from '@angular/core';
interface TaskCreation {
  createTask(taskData: any): void;
}

interface TaskEditing {
  editTask(taskId: number, taskData: any): void;
}

@Component({
  selector: 'app-isp',
  standalone: true,
  imports: [],
  templateUrl: './isp.component.html',
  styleUrl: './isp.component.css'
})
export class IspComponent implements TaskCreation, TaskEditing {
  createTask(taskData: any) { console.log ("Creating Task..")}
  editTask(taskId: number, taskData: any) { console.log ("Editing Task...")}

}
