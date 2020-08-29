import { Component, HostListener } from '@angular/core';
import { StatesService } from './states.service';
import { FullViewDirective } from './full-view/full-view.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'mariowoz';

  elementsArray: any;

  block: Boolean = false;

  ngOn;

  @HostListener('mousewheel', ['$event']) onMousewheel(event) {
    if (!this.block && window.innerWidth > 425) {
      var scrollHeight;

      if (event.wheelDelta > 0) {
        StatesService.previousState();
      } else if (event.wheelDelta < 0) {
        StatesService.nextState();
      }

      this.block = true;
      setTimeout(() => {
        this.setBlock(false);
      }, 700);
    }
  }

  ngAfterViewInit() {
    document.getElementById('background').style.height =
      window.innerHeight + 'px';

    document.getElementById('about-me').style.marginTop =
      window.innerHeight + 'px';
    document.getElementById('services').style.marginTop =
      window.innerHeight * 2 + 'px';
    document.getElementById('contact').style.marginTop =
      window.innerHeight * 3 + 'px';
  }

  setBlock(state: Boolean) {
    this.block = state;
  }

  onSwipeUp(event) {
    StatesService.nextState();
  }

  onSwipeDown(event) {
    StatesService.previousState();
  }

  onResize(event) {
    StatesService.resizeMarginUpdate();
    FullViewDirective.updateHeight();
  }
}
