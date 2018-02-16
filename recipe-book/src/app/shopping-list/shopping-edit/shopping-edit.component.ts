import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name_input') name_input: ElementRef;
  @ViewChild('amount_input') amount_input: ElementRef;
  @Output() element_added = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendIngredient(e) {
    e.preventDefault();
    this.element_added.emit(new Ingredient(
      this.name_input.nativeElement.value,
      this.amount_input.nativeElement.value,
    ));
    this.clearForm();
  }


  clearForm() {
    this.name_input.nativeElement.value = '';
    this.amount_input.nativeElement.value = '';
  }


}
