import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  model = {
    left: true,
    right: false,
    middle: true,
  };

  title = 'biblionaire';
}
