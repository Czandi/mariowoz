import { Component, OnInit, Input } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

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

    const header = document.getElementById('header');
    const aboutMe = document.getElementById('about-me');
    const services = document.getElementById('services');
    const contact = document.getElementById('contact');

    const elements = [header, aboutMe, services, contact];
    var windowHeight;

    if(this.type === 'up'){

      windowHeight = -window.innerHeight;

    }else if(this.type === 'down'){

      windowHeight = window.innerHeight;

    }
    
    for(let el of elements){

      console.log(el);

      const style = window.getComputedStyle(el);
      const property = style.getPropertyValue('margin-top')
      const propertyValue = property.substr(0, property.length-2);

      const newValue = Number(propertyValue) - windowHeight;

      el.style.marginTop = String(newValue) + 'px';

    }

  }

}
