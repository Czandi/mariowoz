export class StatesService {
  private static statesList = ['header', 'about-me', 'services', 'contact'];

  private static currentState = StatesService.statesList[0];

  static getStates(): any {
    return this.statesList;
  }

  static getCurrentState(): any {
    return this.currentState;
  }

  static setCurrentState(state: string): any {
    if (this.statesList.includes(state)) {
      const previousState = this.currentState;
      this.currentState = state;
      this.updateMargin(previousState);
      this.updateScrollBar();
    }
  }

  static nextState(): any {
    let currentIndex = this.statesList.indexOf(this.currentState);
    if (currentIndex + 1 < this.statesList.length) {
      const previousState = this.currentState;
      this.currentState = this.statesList[currentIndex + 1];
      this.updateMargin(previousState);
      this.updateScrollBar();
      return this.currentState;
    } else {
      return null;
    }
  }

  static previousState(): any {
    let currentIndex = this.statesList.indexOf(this.currentState);
    if (currentIndex - 1 >= 0) {
      const previousState = this.currentState;
      this.currentState = this.statesList[currentIndex - 1];
      this.updateMargin(previousState);
      this.updateScrollBar();
      return this.currentState;
    } else {
      return null;
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

  private static changeMargin() {
    const scrollHeight = -window.innerHeight;

    const element = document.getElementById('header');
    const style = window.getComputedStyle(element);
    const property = style.getPropertyValue('margin-top');
    const getPropertyValue = property.substr(0, property.length - 2);

    const newValue = Number(getPropertyValue) - scrollHeight;

    element.style.marginTop = String(newValue) + 'px';
  }

  private static updateMargin(previousState: string) {
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
  }
}
