import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeBookComponent } from './pages/recipe-book/recipe-book.component';
import { RecipeListComponent } from './pages/recipe-book/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './pages/recipe-book/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './pages/recipe-book/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './pages/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListItemComponent } from './pages/shopping-list/shopping-list-item/shopping-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    ShoppingListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
