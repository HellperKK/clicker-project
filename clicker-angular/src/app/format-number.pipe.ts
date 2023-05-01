import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber',
})
export class FormatNumberPipe implements PipeTransform {
  transform(value: number | null): string {
    if (!value) {
      return '0';
    }

    const display = new Intl.NumberFormat('en-GB', {
      notation: 'compact',
      compactDisplay: 'short',
    });

    return display.format(value);
  }
}
