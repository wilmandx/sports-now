import { Component, OnInit } from '@angular/core';
import { FieldService } from '../../shared/services/field.service';
import { Field } from '../../shared/models/field.model';

@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

    listElements: Field[];
    tmpElement: Field = new Field('',null);
    formVisible= false;

    constructor(private fieldService: FieldService) { }

    ngOnInit() {
        this.fieldService.list('per-bombonera').subscribe((data) => {
            this.listElements = data;
        });
    }

    editElement(elemlent: Field) {
        this.tmpElement = elemlent;
    }

    showForm() {
        this.formVisible = true;
    }

}
