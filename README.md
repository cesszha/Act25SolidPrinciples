# SOLID Principles in Angular

This repository contains an exploration of the SOLID principles applied within Angular applications.

## Principles Covered

1. **Single Responsibility Principle (SRP)**:
   - Each component should have one responsibility.
   - Example:
     ```typescript
     @Component({
       selector: 'app-user-list',
       template: `
         <ul>
           <li *ngFor="let user of users">{{ user.name }}</li>
         </ul>
       `
     })
     export class UserListComponent { ... }
     ```

2. **Open-Closed Principle (OCP)**:
   - Classes should be open for extension but closed for modification.
   - Example:
     ```typescript
     abstract class Task { ... }
     ```

3. **Liskov Substitution Principle (LSP)**:
   - Derived classes must be substitutable for their base classes.
   - Example:
     ```typescript
     class EmailTask extends Task { ... }
     ```

4. **Interface Segregation Principle (ISP)**:
   - Clients should not be forced to depend on interfaces they do not use.
   - Example:
     ```typescript
     interface TaskCreation { ... }
     ```

5. **Dependency Inversion Principle (DIP)**:
   - High-level modules should not depend on low-level modules; both should depend on abstractions.
   - Example:
     ```typescript
     abstract class NotificationService { ... }
     ```

## Links

- [Hashnode Article](<insert_hashnode_link_here>)