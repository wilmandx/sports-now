import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field-view',
  templateUrl: './field-view.component.html',
  styleUrls: ['./field-view.component.scss']
})
export class FieldViewComponent implements OnInit {
  @Input('fldElement')
  element:{name: string, content: string};
  constructor() { }

  ngOnInit() {
  }

}
