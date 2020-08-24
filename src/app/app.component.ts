import { Component, HostListener } from '@angular/core';
import { StatesService } from './states.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'mariowoz';

  block: Boolean = false;

  @HostListener('mousewheel', ['$event']) onMousewheel(event) {
    if (!this.block) {
      var scrollHeight;

      if (event.wheelDelta > 0) {
        StatesService.previousState()
      } else if (event.wheelDelta < 0) {
        StatesService.nextState()
      }

      this.block = true;
      setTimeout(() => {
        this.setBlock(false);
      }, 700);
    }
  }

  setBlock(state: Boolean) {
    this.block = state;
  }

  changeMargin(scrollHeight: any) {
    const element = document.getElementById('header');
    const style = window.getComputedStyle(element);
    const property = style.getPropertyValue('margin-top');
    const getPropertyValue = property.substr(0, property.length - 2);

    const newValue = Number(getPropertyValue) - scrollHeight;

    element.style.marginTop = String(newValue) + 'px';
  }
}

//TODO Repair scroll view on touchpad
