import { Component } from '@angular/core';
import { StepCounterComponent } from "../day/six/step-counter/step-counter.component";
import { BadgeParentComponent } from "../day/six/badge-parent/badge-parent.component";
import { ReversePipe } from '../../pipes/day/six/reverse/reverse.pipe';
import { ContactFormComponent } from "../day/six/contact-form/contact-form.component";

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [StepCounterComponent, BadgeParentComponent, ReversePipe, ContactFormComponent],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class MainViewComponent {
}
