import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitilizeWords'
})
export class CapitilizeWordsPipe implements PipeTransform {

  transform(sentence: string): string {
    if (!sentence) return '';
    //return sentence.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
    return sentence.replace(/\b\w+\b/g, word =>
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
  }
}
