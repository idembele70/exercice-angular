import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-hello-user',
  standalone: true,
  imports: [],
  templateUrl: './hello-user.component.html',
  styleUrl: './hello-user.component.scss'
})
export class HelloUserComponent {
  @Input() name: string = '';
}
