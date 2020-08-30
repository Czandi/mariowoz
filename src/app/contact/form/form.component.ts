import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})
export class FormComponent implements OnInit {
  formBackgroundElement: any;
  informationElement: any;
  formElement: any;
  arrowElement: any;
  buttonElement: any;
  elArray: any;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.formBackgroundElement = document.getElementById('form-background');

    this.informationElement = document.getElementById('information');
    this.formElement = document.getElementById('form');
    this.arrowElement = document.getElementById('arrow');
    this.buttonElement = document.getElementById('contact-me-button');

    this.elArray = [
      this.informationElement,
      this.formElement,
      this.arrowElement,
      this.buttonElement,
      this.formBackgroundElement,
    ];
  }

  onClick() {
    if (window.innerWidth > 1024) {
      this.elArray.forEach((el) => {
        el.classList.toggle('open');
      });
      this.formBackgroundElement.classList.remove('hover');
    } else {
      this.formElement.classList.toggle('open');
    }
  }

  mouseEnter() {
    if (!this.formBackgroundElement.classList.contains('open')) {
      this.formBackgroundElement.classList.add('hover');
    }
  }

  mouseLeave() {
    if (!this.formBackgroundElement.classList.contains('open')) {
      this.formBackgroundElement.classList.remove('hover');
    }
  }
}
