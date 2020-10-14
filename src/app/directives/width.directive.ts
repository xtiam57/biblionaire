import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[width]',
})
export class WidthDirective {
  @Input()
  set width(width: string) {
    this.elem.nativeElement.style.width = width;
  }

  constructor(private elem: ElementRef) {}
}
