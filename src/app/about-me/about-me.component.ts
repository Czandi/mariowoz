import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  style,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.sass'],
  animations: [
    trigger('rotate', [
      state('in', style({ transform: 'rotate(0)' })),
      state('out', style({ transform: 'rotate(90deg)' })),
      transition('in => out', animate('10s linear')),
    ]),
  ],
})
export class AboutMeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  state = 'in';

  onEnd(event) {
    this.state = 'in';
    if (event.toState === 'in') {
      this.state = 'out';
    }
  }
}
