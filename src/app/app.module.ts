import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ThemeComponent } from './theme/theme.component';
import { AppRoutingModule } from './app-routing.module';
import { FieldComponent } from './field/field.component';
import { FieldEditComponent } from './field/field-edit/field-edit.component';
import { FieldViewComponent } from './field/field-view/field-view.component';
import { SigninComponent } from './auth/signin/signin.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThemeComponent,
    FieldComponent,
    FieldEditComponent,
    FieldViewComponent,
    SigninComponent,
    FooterComponent
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
