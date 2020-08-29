import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (window.innerWidth <= 425) {
      document.getElementById('contact-information-content').style.height =
        window.innerHeight + 'px';
      document.getElementById('footer').style.height =
        window.innerHeight * 0.1 + 'px';
    }
  }
}
