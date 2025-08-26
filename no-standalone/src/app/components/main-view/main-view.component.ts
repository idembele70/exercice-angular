import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { UserService } from '../../services/mid/day-04/user.service';
import { User } from '../../models/mid/day-04/user';
import { Todo } from '../../models/mid/day-04/todo';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class MainViewComponent implements OnInit, OnDestroy {
  readonly users$ = this.userService.getUsers$();
  todos: Todo[] = []
  private readonly destroy$ = new Subject<void>();
  searchTerm: string = '';

  
  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
    this.userService.getTodos$()
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      todos => this.todos = todos
    )
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
