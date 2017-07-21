import { Component } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  template: `
    <p>
      twoway-binding Works!
    </p>
  `,
  styles: []
})
export class TwowayBindingComponent {
  person = {
    name: 'Dermus',
    age: 21

  };
}
