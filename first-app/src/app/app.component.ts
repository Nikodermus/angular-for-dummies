import { Component } from '@angular/core';
import { DatabindingComponent } from './databinding/databinding.component';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'The Coolest App Ever';
}
