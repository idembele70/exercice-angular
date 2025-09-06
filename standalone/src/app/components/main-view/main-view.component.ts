import { Component, inject } from '@angular/core';

import { CounterComponent } from '../mid/day-08/counter/counter.component';
import { AuthService } from '../../services/mid/day-08/auth.service';
import { TruncatePipe } from '../../pipes/mid/day-08/truncate.pipe';
import { HighlightDirective } from '../../directives/mid/day-08/highlight.directive';
import { RegisterFormComponent } from '../mid/day-08/register-form/register-form.component';


@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [CounterComponent, TruncatePipe, HighlightDirective, RegisterFormComponent],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss',
})
export class MainViewComponent {
  private readonly authService = inject(AuthService);
  onToggleAdmin() {
    this.authService.toggleAdmin();
  }

  get isAdmin() {
    return this.authService.isAdmin();
  }
}
