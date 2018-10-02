import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { CrudFireIngredientsService } from '../../services/crud-fire-ingredients.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  ingredients: any;
  arrIngredients: any;

  constructor(
    private _crud: CrudFireIngredientsService
  ) {
    this._crud.getIngredients().subscribe(value => {
      this.arrIngredients = value;
    });
  }

  ngOnInit() {
  }

  removeElem(element): void {
    this._crud.removeIngredient(element);
  }

}
