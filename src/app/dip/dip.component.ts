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
