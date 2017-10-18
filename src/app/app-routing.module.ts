import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemeComponent } from './theme/theme.component';
import { FieldComponent } from './field/field.component';
import { SigninComponent } from './auth/signin/signin.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/theme', pathMatch: 'full'},
    {path: 'theme', component: ThemeComponent},
    {path: 'fields', component: FieldComponent},
    {path: 'signin', component: SigninComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
