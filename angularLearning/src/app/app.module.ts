import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import {StarComponent} from './shared/star.component'
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductDetailGuard } from './products/product-detail.guard';

//AppModule: Angular module is a class decorated with @NgModule attribute. 
//it's purpose:
//Organize the pieces of application,  Arrange them into blocks, Extend our application with capabilities from external libraries,
//provide a template resolution environment, Aggregate and re-export
@NgModule({
  //declare defined component modules here
  declarations: [
    //Declare here all @Component, @Directive and @Pipe defined in the applications also each of these must belongs to one and only
    //one @NgModule angular module.
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    WelcomeComponent,
    ProductDetailComponent
  ],
  //Imports angular modules
  imports: [
    //user defined angular module @NgModule defines to handle routing, app-routing.module.ts
    AppRoutingModule,
    //Angular Module: needed for *ng features like *ngFor, *ngIf etc
    BrowserModule,
    //Angular Module: needed for forms features like two way binding. .i.e. [(ngModel)]
    FormsModule,
    //Angular Module: needed for http Client
    HttpClientModule,
    //Angular Module: needed for routing features. i.e. routerLink, <router-outlet/> etc. This is defined seperately in app-routing.module and
    //imported here as 'AppRoutingModule' NgModule.
    //RouterModule.forRoot([
    //  {path:'products', component: ProductListComponent},
    //  {path:'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent},
    //  {path:'welcome', component: WelcomeComponent},
    //  {path:'', redirectTo:'welcome', pathMatch: 'full'},
    //  {path:'**', redirectTo:'welcome', pathMatch: 'full'}
    //])
  ],
  //Allows to share @NgModule, @Component, @Directive and @Pipe with other modules
  exports : [],
  //Allow to share services, i.e. [ProductService] but this is not a recommended approach and instead
  //service must be decorated with @Injectable with ProvideIn:'root' which means service is available
  //to inject & resolve at root hence everywhere in the application.
  providers: [],
  //This defines the component class which is the starting point of the application. in this case it is 'AppComponent' defined in app.component.ts.
  //Components defined here will be execute when application starts.
  bootstrap: [AppComponent]
})
export class AppModule { }
