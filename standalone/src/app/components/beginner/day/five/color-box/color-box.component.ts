import { AfterViewInit, Component, DoCheck, input, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-color-box',
  standalone: true,
  imports: [],
  templateUrl: './color-box.component.html',
  styleUrl: './color-box.component.scss'
})
export class ColorBoxComponent implements OnInit {
  // @Input({required: true, }) bgColor: string = '#000000'
  backgroundColor = input.required({alias: 'bgColor'});

  
  public get bgColor() : string {
    return this.backgroundColor() as string;
  }
  ngOnInit(): void {
    console.log('changes')
  }
}
