import { Component, OnInit, Input } from '@angular/core';
import { Statement } from '@angular/compiler';
import { StatesService } from 'src/app/states.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ marginBottom: '-20px', opacity: 0 }),
        animate('.7s 700ms ease', style({ marginBottom: '0', opacity: 1 })),
      ]),
    ]),
  ],
})
export class NavbarComponent implements OnInit {
  @Input() activeItem: string;
  @Input() items: Array<string>;
  @Input() color: string;
  names: any;

  constructor() {}

  ngOnInit(): void {
    this.names = {
      'o mnie': 'about-me',
      usługi: 'services',
      kontakt: 'contact',
    };
  }

  onClick(item: string) {
    StatesService.setCurrentState(this.names[item]);
  }
}
