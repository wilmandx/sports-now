import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  fieldList = [{name:"field 1", content:"players so"}];
  title='Test de binding';
  habilitar=false;
  testCreated=false;

  getTitle(){
    return this.title;

  }
  constructor() { 
    setTimeout(()=>{
      this.habilitar=true;
    },5000);
  }

  clickTest(){
    this.testCreated=true;
  }

  ngOnInit() {
  }

  onFieldAdded(fieldData){
    this.fieldList.push(fieldData);
  }

  onChangeFirst(){
    this.fieldList[0].name="great!!";
  }

  destroyFirst(){
    this.fieldList.splice(0,1);
  }

}
