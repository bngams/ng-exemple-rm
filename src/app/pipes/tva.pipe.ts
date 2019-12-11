import { Pipe, PipeTransform } from '@angular/core';

/*
 * Calculate price with TVA
 * Takes an average argument that defaults to 20.
 * Usage:
 *   value | tva:average
 * Example:
 *   {{ 100 | tva:20 }}
 *   formats to: 120
*/
@Pipe({
  name: 'tva'
})
export class TVAPipe implements PipeTransform {

  transform(value: number, average: number, crop: number): number {
    return value * (1 + average / 100);
  }

}
