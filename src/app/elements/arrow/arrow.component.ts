import { Component, OnInit, Input } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.sass']
})
export class ArrowComponent implements OnInit {

  @Input() type: string;
  @Input() element_id: string;
  @Input() color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
