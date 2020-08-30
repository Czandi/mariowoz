import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appFullView]',
})
export class FullViewDirective implements OnInit {
  private static elements = [];

  constructor(private elementRef: ElementRef) {
    FullViewDirective.elements.push(elementRef);
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.height = window.innerHeight + 'px';
    this.elementRef.nativeElement.style.transition = 'height .5s ease';
  }

  static updateHeight() {
    FullViewDirective.elements.forEach((el) => {
      el.nativeElement.style.height = window.innerHeight + 'px';
    });
  }
}
