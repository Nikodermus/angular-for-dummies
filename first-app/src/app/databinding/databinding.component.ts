import { Component } from '@angular/core';

import { MycomponentComponent } from './mycomponent.component';
import { EventBindingComponent } from './event-binding.component';
import { TwowayBindingComponent } from './twoway-binding.component';


@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  stringInterpolation = 'This is what I\'m supposed to do';
  numberInterpolation = 2;

  createTest() {
    let a = Math.random();
    let b = Math.random();
    if (a >= b) {
      return true;
    }
    else {
      return false;
    }

  }

  createColor() {
    let a = Math.random();
    let b = Math.random();
    if (a >= b) {
      return 'blue';
    }
    else {
      return 'green';
    }
  }

  onClicked(value: string) {
    alert(value);
  }
}
