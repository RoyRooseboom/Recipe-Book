import { Component, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent 
{
  @Output() recipeWasSelected = new EventEmitter<Recipe>();


  recipes: Recipe[] = [
    new Recipe("Test Recipe", 
    "A great description", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkLpemQckgcADv6pxOmOywXWp_josNgx9Tvg&usqp=CAU"),
    new Recipe("Burger", 
    "Description Test", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkLpemQckgcADv6pxOmOywXWp_josNgx9Tvg&usqp=CAU"),
    new Recipe("Something", 
    "Hello", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkLpemQckgcADv6pxOmOywXWp_josNgx9Tvg&usqp=CAU"),
    new Recipe("Test Recipe", 
    "Description Test", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkLpemQckgcADv6pxOmOywXWp_josNgx9Tvg&usqp=CAU"),
  ];


  onRecipeSelected(recipe: Recipe)
  {
    this.recipeWasSelected.emit(recipe);
  }
}
