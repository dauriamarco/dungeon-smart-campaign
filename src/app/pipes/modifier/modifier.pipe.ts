import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mod',
})
export class ModifierPipe implements PipeTransform {
  transform(stat: number, getString: boolean = false): number | string {
    return getString ? this.getModifierString(stat) : this.getModifier(stat);
  }

  private getModifierString(e: number): string {
    let tmpValue = e;
    let modifier = '';

    if (tmpValue % 2 !== 0) {
      tmpValue--;
    }

    if (tmpValue - 10 > 1) {
      modifier = '+';
    }
    modifier = modifier + ((tmpValue - 10) / 2).toFixed(0);

    return modifier;
  }

  private getModifier(e: number): number {
    let tmpValue = e;
    let modifier = 0;
    
    if (tmpValue % 2 !== 0) {
      tmpValue--;
    }
    
    modifier = +((tmpValue - 10) / 2).toFixed(0);

    return modifier;
  }
}
