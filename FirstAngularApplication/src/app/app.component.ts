import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // as element
  //selector: '[app-root]', // as attribute
  //selector: '.app-root', // as class
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
}
