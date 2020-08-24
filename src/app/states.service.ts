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
        if(currentIndex + 1 < this.statesList.length){
            this.currentState = this.statesList[currentIndex+1];
            return this.currentState;
        }else{
            return null;
        }
    }

    static previousState(): any {
        let currentIndex = this.statesList.indexOf(this.currentState);
        if(currentIndex-1 >= 0){
            this.currentState = this.statesList[currentIndex-1];
            return this.currentState;
        }else{
            return null;
        }
    }

}