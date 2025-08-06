import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent {
  @Input({ required: true }) rating = 0;

  public get stars() : string {
    const MAX_RATE = 5;
    if(this.rating > MAX_RATE)
      return '★'.repeat(MAX_RATE);
    if(this.rating < 0)
      return '☆'.repeat(MAX_RATE);

    const emptyStarsCount = MAX_RATE - this.rating;
    return '★'.repeat(this.rating) + '☆'.repeat(emptyStarsCount);
  }
}
