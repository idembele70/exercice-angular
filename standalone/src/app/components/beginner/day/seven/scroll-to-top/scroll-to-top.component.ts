import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.scss'
})
export class ScrollToTopComponent implements AfterViewInit {
  @ViewChild('btn') scrollTopBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('scrollable') scrollable!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
      this.scrollable.nativeElement.style.scrollBehavior = 'smooth';
  }

  onScroll() {
    if (this.scrollable.nativeElement.scrollTop < 20)
      this.scrollTopBtn.nativeElement.style.display = 'none';
    else
      this.scrollTopBtn.nativeElement.style.display = 'block';
  }

  OnScrollTop() {
    this.scrollable.nativeElement.scrollTop = 0;
  }
}
