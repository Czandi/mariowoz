import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.sass'],
})
export class ContactInformationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    if (window.innerWidth <= 1024) {
      const formElement = document.getElementById('form');
      formElement.classList.toggle('open');
    }
  }
}
