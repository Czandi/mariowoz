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

    console.log(this.block);

    if(event.wheelDelta>0 && !this.block){

      console.log(StatesService.getStates());
      this.block = true
      setTimeout(function(){
        this.setBlock(false);
        console.log(this.block);
      }, 500);

    }

    if(event.wheelDelta<0 && !this.block){

      const element = document.getElementById('about-me');

      element.scrollIntoView({behavior: 'smooth'});
      this.block = true;
      setTimeout(function(){
        this.setBlock(false);
        console.log(this.block);
      }, 500);
    
    }

  }

  
  setBlock(state: Boolean){
      this.block = state;
  }

}
