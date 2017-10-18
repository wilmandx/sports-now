import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-field-edit', 
  templateUrl: './field-edit.component.html',
  styleUrls: ['./field-edit.component.scss']
})
export class FieldEditComponent implements OnInit {
  @Output('fieldAdded')
  fieldCreated = new EventEmitter<{name: string, content: string}>();
  fieldName = '';
  fieldContent = '';
  //@ViewChild('nameFieldInput') nameFieldContent: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddField(/*nameFieldInput: HTMLInputElement*/) {
    //console.log('Name =', this.nameFieldContent.nativeElement.value);
    
    this.fieldCreated.emit({name: this.fieldName, content: this.fieldContent});
  }

}
