import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { element } from 'protractor';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {


  ingredients: Ingredient[] = [
    new Ingredient('Nutella', 1),
    new Ingredient('Ribs', 20),
  ];

  constructor() { }

  ngOnInit() {
  }

  addIngredient(ingredient) {
    this.ingredients.push(ingredient)
  }

}
