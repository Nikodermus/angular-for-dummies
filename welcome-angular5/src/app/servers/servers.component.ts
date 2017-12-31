import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-servers',
	templateUrl: './servers.component.html',
	styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allow_new_server = false;
	server_name = 'Add new server';
	servers = ['server1', 'server2'];
	times_showed = [];

	constructor() {
		setTimeout(() => {
			this.allow_new_server = !this.allow_new_server;
		}, 2000);
	}

	ngOnInit() {
	}

	onCreateServer() {
		this.servers.push('server_name');
		this.server_name = 'Add new server';
	}

	timesShowed() {
		this.times_showed.push(new Date());
	}


}
