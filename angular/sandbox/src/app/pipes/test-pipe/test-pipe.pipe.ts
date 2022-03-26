import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe',
})
export class TestPipePipe implements PipeTransform {
  transform(value: string, arg1: number, arg2: number): string {
    console.log(arg1, arg2);
    return value.toUpperCase();
  }
}
