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
