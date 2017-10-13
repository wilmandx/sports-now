import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RefBootstrapComponent } from './ref-bootstrap/ref-bootstrap.component';
import { FieldComponent } from './field/field.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/ref-bootstrap', pathMatch: 'full'},
    {path: 'ref-bootstrap', component: RefBootstrapComponent},
    {path: 'fields', component: FieldComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
