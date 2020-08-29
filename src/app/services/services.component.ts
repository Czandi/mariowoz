import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  keyframes,
  style,
} from '@angular/animations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.sass'],
})
export class ServicesComponent implements OnInit {
  paragraphs: any;
  dots: any;
  activeServiceIndex: any;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.paragraphs = [
      document.getElementById('first-paragraph'),
      document.getElementById('second-paragraph'),
      document.getElementById('third-paragraph'),
    ];

    this.dots = [
      document.getElementById('first-dot'),
      document.getElementById('second-dot'),
      document.getElementById('third-dot'),
    ];

    this.activeServiceIndex = 0;
  }

  onSwipeLeft(event) {
    this.setActiveService(this.activeServiceIndex + 1);
  }

  onSwipeRight(event) {
    this.setActiveService(this.activeServiceIndex - 1);
  }

  setActiveService(index: number) {
    if (index === -1) {
      index = 2;
    } else if (index === 3) {
      index = 0;
    }
    this.dots[this.activeServiceIndex].classList.remove('active');
    this.dots[index].classList.add('active');

    this.paragraphs[0].style.marginLeft = -200 * index + 'vw';

    this.activeServiceIndex = index;
  }
}
