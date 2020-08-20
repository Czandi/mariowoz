import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  @Input() currentItem: string;
  @Input() items: Array<string>;
  @Input() color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
