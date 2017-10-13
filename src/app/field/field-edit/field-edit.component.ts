import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-field-edit', 
  templateUrl: './field-edit.component.html',
  styleUrls: ['./field-edit.component.scss']
})
export class FieldEditComponent implements OnInit {
  @Output()
  fieldCreated = new EventEmitter<{name: string, content: string}>();
  fieldName = '';
  fieldContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddField(){
    this.fieldCreated.emit({name: this.fieldName, content: this.fieldContent});
  }

}
