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
    this._crud.getIngredients().subscribe(sda => {
      this.arrIngredients = sda;
      console.log(this.arrIngredients[1]);
      // this.ingredients = sda;
    });

    // firebase
    //   .database()
    //   .ref('ingredient')
    //   .on('value', (snap) => {
    //     this.ingredients = snap.val();
    //     console.log(this.ingredients);
    //     if (snap.val() !== null) {
    //       this.arrIdsIngredients = Object.keys(snap.val()).reverse();
    //       console.log(this.arrIdsIngredients)
    //     }
    //   });
  }

  ngOnInit() {

  }

}
