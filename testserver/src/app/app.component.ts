import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'Test', content: 'This is only a test' }
  ];

  onServerCreated(server_data: { name: string, content: string }) {
    this.serverElements.push({
      type: 'server',
      name: server_data.name,
      content: server_data.content
    });
  }

  onbluePrintCreated(blueprint_data: { name: string, content: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprint_data.name,
      content: blueprint_data.content
    });
  }


}
