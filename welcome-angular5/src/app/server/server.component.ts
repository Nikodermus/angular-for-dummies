import { Component } from '@angular/core';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
})
export class ServerComponent {
	server_id = 13;
	server_status = 'Up!';

	constructor() {
		this.server_status = Math.random() > 0.5 ? 'up' : 'off';
	}
	getColor() {
		return this.server_status === 'up' ? 'green' : 'red';
	}

}
