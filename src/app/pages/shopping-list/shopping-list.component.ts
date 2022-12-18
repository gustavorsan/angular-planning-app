import { Component } from '@angular/core';
import { Igridient } from 'src/app/shared/igridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingridients:Igridient[] = [
    new Igridient('tomato',5),
    new Igridient('apple',3),
    new Igridient('orange',1)
  ];
}
