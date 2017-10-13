import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  fieldList = [{name:"field 1", content:"players so"}];
  constructor() { }

  ngOnInit() {
  }

  onFieldAdded(fieldData){
    this.fieldList.push(fieldData);
  }

}
