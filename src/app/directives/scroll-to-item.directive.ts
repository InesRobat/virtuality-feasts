import { Directive, ElementRef, Inject, Input } from '@angular/core';

@Directive({
  selector: '[appScrollToItem]',
  standalone: true,
})
export class ScrollToItemDirective {

  @Input() public value!: number;

  constructor(
    @Inject(ElementRef) private elementRef: ElementRef<HTMLElement>,
  ) { }

  public scrollIntoView(): void {
    this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
