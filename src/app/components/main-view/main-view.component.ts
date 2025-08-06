import { Component, OnInit } from '@angular/core';
import { RatingComponent } from "../day/eight/rating/rating.component";
import { HighlightOnHoverDirective } from '../../directives/day/eight/highlight-on-hover/highlight-on-hover.directive';
import { SortByPipe } from '../../pipes/day/eight/sort-by/sort-by.pipe';
import { User } from '../../models/day/eight/user';
import { NgFor } from '@angular/common';
import { loggerServiceFactory } from '../../services/day/eight/logger/logger.factory';
import { DynamicFormComponent } from '../day/eight/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [RatingComponent, HighlightOnHoverDirective, SortByPipe, NgFor, DynamicFormComponent],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss',
})
export class MainViewComponent {
  readonly date = new Date('2020-07-25');
  onSearch(value: string) {
    console.log(value);
  }

  readonly users: User[] = [
    {
      age: 150,
      job: 'Business Manager',
      name: 'meme'
    },
    {
      age: 25,
      job: 'Developer',
      name: 'John Doe'
    },
    {
      age: 5,
      job: 'Freelance',
      name: 'toto'
    },
  ];
}
