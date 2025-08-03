import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-color-box',
  standalone: true,
  imports: [],
  templateUrl: './color-box.component.html',
  styleUrl: './color-box.component.scss'
})
export class ColorBoxComponent {
  // @Input({required: true, }) bgColor: string = '#000000'
  backgroundColor = input.required({alias: 'bgColor'});

  
  public get bgColor() : string {
    return this.backgroundColor() as string;
  }
  
}
