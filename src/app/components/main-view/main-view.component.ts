import { Component, OnInit, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormArrayDynamicComponent } from '../mid/day-01/form-array-dynamic/form-array-dynamic.component';
// import { AsyncPipe } from '../../pipes/mid/day-01/async/async.pipe';
import { ArticleService } from '../../services/mid/day-01/article/article.service';
import { HighlightDirective } from '../../directives/mid/day-01/highlight/highlight.directive';
import { CapitalizePipe } from '../../pipes/mid/day-01/capitalize/capitalize.pipe';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [FormArrayDynamicComponent, NgFor, HighlightDirective, CapitalizePipe],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss',
})
export class MainViewComponent {
 private readonly articleService = inject(ArticleService);

  articles$ = this.articleService.getArticles$;

}
