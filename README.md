In modern software development, adhering to design principles is crucial for creating maintainable, scalable, and testable applications. The **SOLID** principles are a set of five guidelines that can significantly enhance the architecture of your Angular applications. This article will explore each principle and provide practical examples of their implementation in Angular projects.

## **The SOLID Principles**

1. **Single Responsibility Principle (SRP)**: A class should have only one reason to change.
    
2. **Open-Closed Principle (OCP)**: Software entities should be open for extension but closed for modification.
    
3. **Liskov Substitution Principle (LSP)**: Subtypes must be substitutable for their base types without altering the correctness of the program.
    
4. **Interface Segregation Principle (ISP)**: Clients should not be forced to depend on interfaces they do not use.
    
5. **Dependency Inversion Principle (DIP)**: High-level modules should not depend on low-level modules; both should depend on abstractions.
    

## **1\. Single Responsibility Principle (SRP)**

In Angular, each component should handle a single task or responsibility. For instance, consider a`UserListComponent`that is responsible solely for displaying a list of users:

```typescript
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
```

**Use Case**: This separation allows for easier testing and maintenance, as changes to user display logic do not affect data fetching or other functionalities.

## **2\. Open-Closed Principle (OCP)**

The OCP states that classes should be designed to allow new functionality without modifying existing code. In Angular, you can achieve this through inheritance and interfaces. For example:

```typescript
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
```

**Use Case**: When adding new task types, you can create new classes extending `Task`, ensuring existing code remains untouched.

## **3\. Liskov Substitution Principle (LSP)**

LSP ensures that derived classes can replace their base classes without affecting the program's functionality. For instance, if you have a base`Task`class:

```typescript
import { Component } from '@angular/core';
class Task {
  execute() {}
}
@Component({
  selector: 'app-lsp',
  standalone: true,
  imports: [],
  templateUrl: './lsp.component.html',
  styleUrl: './lsp.component.css'
})
export class LspComponent extends Task{
 override execute() {
    console.log('LSP');
  }
}
```

**Use Case**: Any component expecting a`Task`object can work with`EmailTask`seamlessly, promoting flexibility.

## **4\. Interface Segregation Principle (ISP)**

ISP advocates for creating smaller, more specific interfaces rather than large ones that force clients to implement methods they don’t use. In Angular:

```typescript
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
```

**Use Case**: By separating interfaces, components only implement what they need, leading to cleaner code.

## **5\. Dependency Inversion Principle (DIP)**

DIP emphasizes that high-level modules should not depend on low-level modules but rather on abstractions. In Angular, this is commonly achieved using dependency injection:

```typescript
/service.ts

import { Injectable } from '@angular/core';
abstract class NotificationService {
  abstract notify(message: string): void;
}
@Injectable({
  providedIn: 'root'
})
export class EmailserviceService  extends NotificationService {
  notify(message: string) {
    console.log('Email notification:', message);
  }
  
}
```

**Use Case**: This allows for easy swapping of notification methods without changing the `TaskComponent`.

```typescript
/component.ts

import { Component } from '@angular/core';
import { EmailserviceService } from '../emailservice.service';
@Component({
  selector: 'app-dip',
  standalone: true,
  imports: [],
  templateUrl: './dip.component.html',
  styleUrl: './dip.component.css'
})
export class DipComponent {
constructor( private emailService: EmailserviceService ){}
completeTask(){
  this.emailService.notify ("Notification sent..")
}

}
```

GitHub Repository: [GitHub - cesszha/Act25SolidPrinciples](https://github.com/cesszha/Act25SolidPrinciples)