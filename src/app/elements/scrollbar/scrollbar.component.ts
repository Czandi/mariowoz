import { Component, OnInit } from '@angular/core';
import { StatesService } from 'src/app/states.service';

@Component({
  selector: 'app-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.sass'],
})
export class ScrollbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onClick(state: string) {
    StatesService.setCurrentState(state);
  }
}
