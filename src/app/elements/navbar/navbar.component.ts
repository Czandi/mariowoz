import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  @Input() activeItem: string;
  @Input() items: Array<string>;
  @Input() color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
