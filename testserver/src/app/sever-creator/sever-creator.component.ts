import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sever-creator',
  templateUrl: './sever-creator.component.html',
  styleUrls: ['./sever-creator.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SeverCreatorComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output() serverCreated = new EventEmitter<{ name: string, content: string }>();
  @Output() bluePrintCreated = new EventEmitter<{ name: string, content: string }>();
  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({
      name: this.newServerName, content: this.newServerContent
    });
    this.newServerContent = '';
    this.newServerName = '';
  }
  onAddBlueprint() {
    this.serverCreated.emit({
      name: this.newServerName, content: this.newServerContent
    });
    this.newServerContent = '';
    this.newServerName = '';
  }




}
