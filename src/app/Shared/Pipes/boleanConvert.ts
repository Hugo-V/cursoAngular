import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'boleanConvert'})

export class BoleanCoverter implements PipeTransform {
  transform(value: boolean) {
    if (value) {
      return 'Si';
    } else {
      return 'No';
    }
  }

}
