import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'mariowoz';

  constructor(){
    console.log('Hello')
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    console.log($event);
    console.log("scrolling");

    const verticalOffset = window.pageYOffset

    console.log(verticalOffset)

  } 

}
