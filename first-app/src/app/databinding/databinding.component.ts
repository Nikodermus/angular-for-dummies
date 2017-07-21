import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  stringInterpolation = 'This is what I\'m supposed to do';
  numberInterpolation = 2;

  createTest() {
    var a = Math.random();
    var b = Math.random();
    if (a >= b) {
      return true;
    }
    else {
      return false;
    }

  }

  createColor() {
    var a = Math.random();
    var b = Math.random();
    if (a >= b) {
      return 'blue';
    }
    else {
      return 'green';
    }
  }
}
