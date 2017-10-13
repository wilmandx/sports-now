import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RefBootstrapComponent } from './ref-bootstrap/ref-bootstrap.component';
import { AppRoutingModule } from './app-routing.module';
import { FieldComponent } from './field/field.component';
import { FieldEditComponent } from './field/field-edit/field-edit.component';
import { FieldViewComponent } from './field/field-view/field-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RefBootstrapComponent,
    FieldComponent,
    FieldEditComponent,
    FieldViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
