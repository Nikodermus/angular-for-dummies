import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() current_recipe: Recipe;
  @Output() emitted_recipe = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  sendDetails() {
    console.log('item')
    this.emitted_recipe.emit();
  }

}
