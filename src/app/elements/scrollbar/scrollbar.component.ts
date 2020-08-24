import { Component, OnInit } from '@angular/core';
import { StatesService } from 'src/app/states.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.sass'],
  animations: [
    trigger('fadeIn1', [
      transition(':enter', [
        style({ marginTop: '110px' }),
        animate('.7s 200ms ease', style({ marginTop: '50px' })),
      ]),
    ]),
    trigger('fadeIn2', [
      transition(':enter', [
        style({ marginTop: '110px' }),
        animate('.7s 400ms ease', style({ marginTop: '50px' })),
      ]),
    ]),
    trigger('fadeIn3', [
      transition(':enter', [
        style({ marginTop: '110px' }),
        animate('.7s 600ms ease', style({ marginTop: '50px' })),
      ]),
    ]),
    trigger('fadeIn4', [
      transition(':enter', [
        style({ marginTop: '100px' }),
        animate('.7s 800ms ease', style({ marginTop: '40px' })),
      ]),
    ]),
  ],
})
export class ScrollbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onClick(state: string) {
    StatesService.setCurrentState(state);
  }
}
