import { Component, HostListener } from '@angular/core';
import { StatesService } from './states.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'mariowoz';

  block: Boolean = false;

  @HostListener('mousewheel', ['$event']) onMousewheel(event) {

    console.log(StatesService.getCurrentState());

    if(!this.block){

      if(event.wheelDelta>0 && (StatesService.previousState() != null)){

        const prevElementId = StatesService.getCurrentState();
    
        const element = document.getElementById(prevElementId); 

        // console.log(element);

        element.scrollIntoView({behavior: 'smooth'});
        this.block = true
        setTimeout(() => {
          this.setBlock(false);
        }, 500);

      }

      if(event.wheelDelta<0 && (StatesService.nextState() != null)){

        const nextElementId = StatesService.getCurrentState();
        
        const element = document.getElementById(nextElementId);

        // console.log(element);

        element.scrollIntoView({behavior: 'smooth'});
        this.block = true;
        setTimeout( () => {
          this.setBlock(false);
        }, 500);
      
      }

    }

  }
    
  setBlock(state: Boolean){
      this.block = state;
  }

}

//TODO Repair scroll view on touchpad
