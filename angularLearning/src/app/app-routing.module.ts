import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductListComponent } from './products/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [{path:'products', component: ProductListComponent},
{path:'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent},
{path:'welcome', component: WelcomeComponent},
{path:'', redirectTo:'welcome', pathMatch: 'full'},
{path:'**', redirectTo:'welcome', pathMatch: 'full'},];

@NgModule({
  //this can be defined directly in app.module unders imports.
  imports: [RouterModule.forRoot(routes)],
  //Allows to share this angular module 'AppRoutingModule' with RoutingModule 
  exports: [RouterModule]
})
export class AppRoutingModule { }
