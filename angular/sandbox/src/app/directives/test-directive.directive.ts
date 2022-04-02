import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTestDirective]',
  inputs: ['appTestDirective'],
})
export class TestDirectiveDirective implements OnInit {
  @Input() public appTestDirective!: string;

  constructor(private readonly elementRef: ElementRef<HTMLHeadingElement>) {
    console.log(elementRef.nativeElement);
    console.log(this.appTestDirective);
  }

  public ngOnInit(): void {
    console.log(this.appTestDirective);
  }
}
