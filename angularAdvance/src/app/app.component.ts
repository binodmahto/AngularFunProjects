import { Component } from '@angular/core';

//This is the starting point
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = "Product Management Demo App"
}
