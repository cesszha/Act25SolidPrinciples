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
