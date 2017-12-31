import { Component } from '@angular/core';

@Component({
	selector: 'server,',
	templateUrl: './server.component.html',
})
export class ServerComponent {
	server_id: number = 13;
	server_status: string = 'Up!';

	getServerCollection() {
		return `${this.server_id} ${this.server_status}`;
	}
}