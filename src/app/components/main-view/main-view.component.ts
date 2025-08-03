import { Component } from '@angular/core';
import { CapitalizePipe } from '../../pipes/day/four/capitalize.pipe';
import { HelloUserComponent } from "../day/five/hello-user/hello-user.component";
import { ClickCounterComponent } from "../day/four/click-counter/click-counter.component";
import { ParentComponent } from "../day/four/parent/parent.component";
import { TimerComponent } from "../day/four/timer/timer.component";
import { UsernameFormComponent } from "../day/four/username-form/username-form.component";
import { ColorBoxComponent } from "../day/five/color-box/color-box.component";
import { TruncatePipe } from '../../pipes/day/five/truncate/truncate.pipe';
import { EmailFormComponent } from "../day/five/email-form/email-form.component";

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [HelloUserComponent, ColorBoxComponent, TruncatePipe, EmailFormComponent],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class MainViewComponent {
  readonly bgColor: string = 'purple';
}
