import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ThemeComponent } from './theme/theme.component';
import { AppRoutingModule } from './app-routing.module';
import { FieldEditComponent } from './field/field-edit/field-edit.component';
import { FieldViewComponent } from './field/field-view/field-view.component';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { InfosComponent } from './admin-customer/infos/infos.component';
import { FieldComponent } from './admin-customer/field/field.component';
import { FieldService } from './shared/services/field.service';


@NgModule({
    declarations: [
        AppComponent,
        ThemeComponent,
        FieldComponent,
        FieldEditComponent,
        FieldViewComponent,
        InfosComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        CoreModule,
        AuthModule
    ],
    providers: [FieldService],
    bootstrap: [AppComponent]
})
export class AppModule { }
