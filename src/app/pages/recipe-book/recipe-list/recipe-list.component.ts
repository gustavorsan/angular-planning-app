import { Component } from '@angular/core';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('bolo #1','bolo de laranja ','https://png.pngtree.com/png-vector/20190123/ourmid/pngtree-cartoon-birthday-cake-cake-cupcake-hand-painted-birthday-cake-png-image_542256.jpg'),
    new Recipe('bolo #2','bolo de cenoura','https://png.pngtree.com/png-vector/20190123/ourmid/pngtree-cartoon-birthday-cake-cake-cupcake-hand-painted-birthday-cake-png-image_542256.jpg'),
    new Recipe('bolo #1','bolo de maça','https://png.pngtree.com/png-vector/20190123/ourmid/pngtree-cartoon-birthday-cake-cake-cupcake-hand-painted-birthday-cake-png-image_542256.jpg'),
    new Recipe('bolo #1','bolo de fuba','https://png.pngtree.com/png-vector/20190123/ourmid/pngtree-cartoon-birthday-cake-cake-cupcake-hand-painted-birthday-cake-png-image_542256.jpg')
  ];
}
