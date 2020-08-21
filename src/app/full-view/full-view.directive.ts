import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFullView]'
})
export class FullViewDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.height = '100vh';
  }

}
