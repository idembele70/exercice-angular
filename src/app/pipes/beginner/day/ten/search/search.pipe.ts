import { Pipe, PipeTransform } from '@angular/core';
import { Appareil } from '../../../../models/day/ten/appareil';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(appareils: Appareil[], searchTerm: string): Appareil[] {
    if (!appareils.length)
      return [];
    if (!searchTerm)
      return appareils;
    return appareils.filter(appareil => appareil.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
