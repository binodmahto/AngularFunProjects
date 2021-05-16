import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from './products/product.module';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'welcome', component: WelcomeComponent},
  {path:'', redirectTo:'welcome', pathMatch: 'full'},
  {path:'**', redirectTo:'welcome', pathMatch: 'full'}
];

@NgModule({
  //this can be defined directly in app.module unders imports.
  imports: [
    RouterModule.forRoot(routes), 
    ProductModule
  ],
  //Allows to share this angular module 'AppRoutingModule' with RoutingModule 
  exports: [RouterModule]
})
export class AppRoutingModule { }
