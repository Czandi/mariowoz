import { ScrollbarComponent } from '../app/elements/scrollbar/scrollbar.component';

export class StatesService {
  private static statesList = ['header', 'about-me', 'services', 'contact'];

  private static block = false;

  private static currentState = StatesService.statesList[0];

  static getStates(): any {
    return this.statesList;
  }

  static getCurrentState(): any {
    return this.currentState;
  }

  static setCurrentState(state: string): any {
    if (this.statesList.includes(state) && !StatesService.block) {
      const previousState = this.currentState;
      this.currentState = state;
      this.updateScrollBar();
      this.updateMargin(previousState);
      StatesService.block = true;
      setTimeout(() => {
        this.setBlock(false);
      }, 700);
    }
  }

  static nextState(): any {
    if (!StatesService.block) {
      let currentIndex = this.statesList.indexOf(this.currentState);
      if (currentIndex + 1 < this.statesList.length) {
        const previousState = this.currentState;
        this.currentState = this.statesList[currentIndex + 1];
        this.updateScrollBar();
        this.updateMargin(previousState);
        StatesService.block = true;
        setTimeout(() => {
          this.setBlock(false);
        }, 700);
        return this.currentState;
      } else {
        return null;
      }
    }
  }

  static previousState(): any {
    if (!StatesService.block) {
      let currentIndex = this.statesList.indexOf(this.currentState);
      if (currentIndex - 1 >= 0) {
        const previousState = this.currentState;
        this.currentState = this.statesList[currentIndex - 1];
        this.updateScrollBar();
        this.updateMargin(previousState);
        StatesService.block = true;
        setTimeout(() => {
          this.setBlock(false);
        }, 700);
        return this.currentState;
      } else {
        return null;
      }
    }
  }

  private static updateScrollBar() {
    this.statesList.forEach((state) => {
      const element = document.getElementById(state + '-scrollbar');
      if (state === this.getCurrentState()) {
        element.classList.add('active');
      } else {
        if (element.classList.contains('active')) {
          element.classList.remove('active');
        }
      }
    });
  }

  static updateMargin(previousState: string) {
    const scrollHeight = window.innerHeight;

    const element = document.getElementById('header');
    const style = window.getComputedStyle(element);
    const property = style.getPropertyValue('margin-top');
    const propertyValue = property.substr(0, property.length - 2);

    const currentIndex = this.statesList.indexOf(this.currentState);
    const previousIndex = this.statesList.indexOf(previousState);

    var direction;
    if (currentIndex > previousIndex) {
      direction = 1;
    } else {
      direction = -1;
    }

    const newValue =
      Number(propertyValue) -
      scrollHeight * Math.abs(currentIndex - previousIndex) * direction;

    element.style.marginTop = String(newValue) + 'px';

    this.updateScrollBarColor(previousState);
  }

  private static updateScrollBarColor(previousState) {
    if (window.innerWidth <= 1024) {
      if (this.currentState === 'about-me') {
        ScrollbarComponent.setLightColor();
      } else if (previousState === 'about-me') {
        ScrollbarComponent.setDarkColor();
      }
    }
  }

  static setBlock(state: boolean) {
    StatesService.block = state;
  }

  static resizeMarginUpdate() {
    this.statesList.forEach((state) => {
      const scrollHeight = window.innerHeight;

      const element = document.getElementById(state);
      const style = window.getComputedStyle(element);
      const property = style.getPropertyValue('margin-top');
      // const propertyValue = property.substr(0, property.length - 2);
      if (state === 'header') {
        const currentIndex = this.statesList.indexOf(this.currentState);
        element.style.marginTop = scrollHeight * currentIndex * -1 + 'px';
      } else {
        const currentIndex = this.statesList.indexOf(state);
        element.style.marginTop = scrollHeight * currentIndex + 'px';
      }
    });
  }
}
