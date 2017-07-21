import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-mycomponent',
  template: `
    <p>
      mycomponent Works!
    </p>
    My exported component is {{result}}
    <ng-content></ng-content>
  `,
  styles: []
})
export class MycomponentComponent {
  @Input() result: number = 0;
}
