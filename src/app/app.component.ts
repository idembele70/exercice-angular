import { Component } from '@angular/core';
import { CounterComponent } from './components/day/one/counter/counter.component';
import { CapitalizePipe } from './pipes/day/one/capitalize.pipe';
import { WelcomeComponent } from "./components/day/one/welcome/welcome.component";
import { HighlightDirective } from './directives/day/one/highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, CapitalizePipe, WelcomeComponent, HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
