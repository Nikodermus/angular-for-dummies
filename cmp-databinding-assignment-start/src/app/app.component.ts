import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odd_numbers: number[] = [];
  even_numbers: number[] = [];

  setNumber(emmited_number) {
    if (emmited_number % 2 === 0) {
      this.even_numbers.push(emmited_number);
    } else {
      this.odd_numbers.push(emmited_number);
    }
    console.log(emmited_number);
  }
}
