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
        animate('.7s 200ms ease', style({ marginTop: '60px' })),
      ]),
    ]),
    trigger('fadeIn2', [
      transition(':enter', [
        style({ marginTop: '110px' }),
        animate('.7s 400ms ease', style({ marginTop: '60px' })),
      ]),
    ]),
    trigger('fadeIn3', [
      transition(':enter', [
        style({ marginTop: '110px' }),
        animate('.7s 600ms ease', style({ marginTop: '60px' })),
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

  static setLightColor() {
    this.setColor('rgba(255, 255, 255, 0.5', 'white');
  }

  static setDarkColor() {
    this.setColor('rgba(45, 45, 45, 0.5', 'black');
  }

  static setColor(color: string, secondColor: string) {
    const scrollBar = document.getElementById('scroll-bar');
    const pElements = scrollBar.getElementsByTagName('p');

    for (let i in pElements) {
      const element = pElements[i];
      if (!element.classList.contains('active')) {
        pElements[i].style.borderColor = color;
        pElements[i].style.color = color;
      } else {
        pElements[i].style.color = secondColor;
        pElements[i].style.borderColor = '#3F7D20';
      }
    }
  }
}
