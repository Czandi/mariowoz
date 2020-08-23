export class StatesService {
    
    private static statesList = ['header', 'about-me', 'services', 'contact'];
    
    private static currentState = StatesService.statesList[0];
    
    static getStates(): any {
        return this.statesList;
    }

    static getCurrentState(): any {
        return this.currentState;
    }

    static nextState(): any {
        let currentIndex = this.statesList.indexOf(this.currentState);
        this.currentState = this.statesList[currentIndex++];
    }

    static previousState(): any {
        let currentIndex = this.statesList.indexOf(this.currentState);
        this.currentState = this.statesList[currentIndex--];
    }

}