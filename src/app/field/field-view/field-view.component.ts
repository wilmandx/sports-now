import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, AfterContentInit, OnDestroy, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-field-view',
  templateUrl: './field-view.component.html',
  styleUrls: ['./field-view.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FieldViewComponent implements OnInit, OnChanges, AfterContentInit, OnDestroy {
  @Input('fldElement')
  element:{name: string, content: string};
  @Input('name')
  name: string;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  
  constructor() { 
    console.log('Constructor ..........');
    
  }

  ngOnInit() {
    console.log('Ng on init .............');
    console.log('Content pargraph ngOnInit',this.paragraph.nativeElement.textContent);
    var d = new Date(Date.UTC(2012, 2, 30));
    console.log('DATE=='+d);
    
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('Ng on changes .............', changes);
  }
  ngAfterContentInit() {
    console.log('Ng on AfterContentInit .............');
    console.log('Content pargraph ngAfterContentInit',this.paragraph.nativeElement.textContent);
  }
  ngOnDestroy(){
    console.log('on Destroyyy');
    
  }

}
