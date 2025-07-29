import { Component, EventEmitter, inject, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private readonly fb = inject(FormBuilder);
  private readonly DEBOUNCE_TIME = 500;
  private readonly destroy$ = new Subject<void>();
  readonly form = this.fb.nonNullable.group({
    search: ['']
  })
  @Output() readonly search = new EventEmitter<string>();

  private readonly valueChanges$ = this.form.valueChanges.pipe(
    debounceTime(this.DEBOUNCE_TIME),
    distinctUntilChanged((prev, current) => prev.search === current.search ),
    takeUntil(this.destroy$),
  )

 ngOnInit(): void {
     this.valueChanges$.subscribe(values => {
      this.search.emit(values.search);
     })
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
 }
}
