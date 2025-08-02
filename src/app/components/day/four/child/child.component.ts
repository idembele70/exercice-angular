import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input({ required: true}) title = '';
  @Output() clicked = new EventEmitter();
  
  onClick() {
    this.clicked.emit();
  }
}
