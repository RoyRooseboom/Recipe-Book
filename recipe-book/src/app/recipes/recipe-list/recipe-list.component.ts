import { Component } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent 
{
  recipes: Recipe[] = [
    new Recipe("Test Recipe", 
    "Description Test", 
    "https://th.bing.com/th/id/OIP.HqmWxoq-Zpw6y4feINmRbQHaLH?pid=ImgDet&rs=1"),
    new Recipe("Test Recipe", 
    "Description Test", 
    "https://th.bing.com/th/id/OIP.HqmWxoq-Zpw6y4feINmRbQHaLH?pid=ImgDet&rs=1"),
    new Recipe("Test Recipe", 
    "Description Test", 
    "https://th.bing.com/th/id/OIP.HqmWxoq-Zpw6y4feINmRbQHaLH?pid=ImgDet&rs=1"),
    new Recipe("Test Recipe", 
    "Description Test", 
    "https://th.bing.com/th/id/OIP.HqmWxoq-Zpw6y4feINmRbQHaLH?pid=ImgDet&rs=1")
  ];
}
