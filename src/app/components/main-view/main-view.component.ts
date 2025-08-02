import { Component } from '@angular/core';
import { ClickCounterComponent } from "../day/four/click-counter/click-counter.component";
import { ParentComponent } from "../day/four/parent/parent.component";
import { UsernameFormComponent } from "../day/four/username-form/username-form.component";
import { CapitalizePipe } from '../../pipes/day/four/capitalize.pipe';
import { AsyncPipe } from '@angular/common';
import { TimerComponent } from "../day/four/timer/timer.component";

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [ClickCounterComponent, ParentComponent, UsernameFormComponent, CapitalizePipe, TimerComponent],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class MainViewComponent {

}
