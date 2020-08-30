import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.7s 700ms ease', style({ opacity: 1 })),
      ]),
    ]),
    trigger('firstEnter', [
      transition(':enter', [
        style({ transform: 'translateX(100px)', opacity: 0 }),
        animate(
          '.7s 700ms ease',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
    ]),
    trigger('secondEnter', [
      transition(':enter', [
        style({ transform: 'translateX(-100px)', opacity: 0 }),
        animate(
          '.7s 700ms ease',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public onResizeListener() {}
}
