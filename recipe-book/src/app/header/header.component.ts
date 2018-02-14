import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() currentActive = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  emitActive(param) {
    console.log(param);
    this.currentActive.emit(param);
  }

}
