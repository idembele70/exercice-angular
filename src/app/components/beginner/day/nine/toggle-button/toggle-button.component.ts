import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.scss'
})
export class ToggleButtonComponent {
  isOn = true;
  @Output() toggled = new EventEmitter<boolean>();

  onClick() {
    this.isOn = !this.isOn;
    this.toggled.emit(this.isOn);
  }
}
