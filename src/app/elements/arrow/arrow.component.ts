import { Component, OnInit, Input } from '@angular/core';
import { StatesService } from 'src/app/states.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.sass'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ marginBottom: '-100px' }),
        animate('.5s 550ms ease', style({ marginBottom: '0' })),
      ]),
    ]),
  ],
})
export class ArrowComponent implements OnInit {
  @Input() type: string;
  @Input('elementId') element_id: string;
  @Input() color: string;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    var scrollHeight;

    // if(window.innerWidth > 425){
      if (this.type === 'up') {
        StatesService.previousState();
      } else if (this.type === 'down') {
        StatesService.nextState();
      }
    // }else{
      const element = document.getElementById(this.element_id);
      element.scrollIntoView({behavior: "smooth"});
    }
  // }
}
