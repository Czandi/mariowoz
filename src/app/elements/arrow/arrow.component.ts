import { Component, OnInit, Input } from '@angular/core';
import { StatesService } from 'src/app/states.service';
import { isFormattedError } from '@angular/compiler';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.sass']
})
export class ArrowComponent implements OnInit {

  @Input() type: string;
  @Input('elementId') element_id: string;
  @Input() color: string;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){

    const element = document.getElementById(this.element_id);

    element.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});

    if(this.type === 'up'){

      StatesService.previousState();

    }else if(this.type === 'down') {

      StatesService.nextState();
      
    }

    console.log(StatesService.getCurrentState());
  }

}
