import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-servers',
	templateUrl: './servers.component.html',
	styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allow_new_server = false;
	server_created = 'No server created';
	server_name = '';

	constructor() {
		setTimeout(() => {
			this.allow_new_server = !this.allow_new_server;
		}, 2000);
	}

	ngOnInit() {
	}

	onCreateServer() {
		this.server_created = 'We have a new server!';
	}

	showData(e) {
		this.server_name = (<HTMLInputElement>e.target).value;
		console.log(e.target.value);
	}

}
