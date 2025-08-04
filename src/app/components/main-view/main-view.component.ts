import { Component } from '@angular/core';
import { SearchBoxComponent } from "../day/seven/search-box/search-box.component";
import { AutoFocusDirective } from '../../directives/day/seven/auto-focus/auto-focus.directive';
import { ScrollToTopComponent } from "../day/seven/scroll-to-top/scroll-to-top.component";
import { FormatDateFrenchPipe } from '../../pipes/day/seven/format-date-french/format-date-french.pipe';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [SearchBoxComponent, AutoFocusDirective, ScrollToTopComponent, FormatDateFrenchPipe],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class MainViewComponent {
  readonly date = new Date('2020-07-25');
  onSearch(value: string) {
    console.log(value);
  }
}
