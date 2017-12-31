import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe('burger',
			'Yummy', 'https://foodloversonline.files.wordpress.com/2014/08/north-indian-dishes.jpg'
		),
		new Recipe('burger',
			'Yummy', 'https://foodloversonline.files.wordpress.com/2014/08/north-indian-dishes.jpg'
		)
	];

	constructor() { }

	ngOnInit() {
	}

}
