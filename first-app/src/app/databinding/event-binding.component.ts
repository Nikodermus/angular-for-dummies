import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  template: `
   <button (click)="onClicked()">Click me like a naughty girl</button>
  `,
  styles: []
})
export class EventBindingComponent {
  @Output('clickable') clicked = new EventEmitter<string>();
  onClicked() {
    this.clicked.emit('Works even better?');
  }


}
