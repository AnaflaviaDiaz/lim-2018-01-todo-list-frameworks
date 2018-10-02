import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CrudFireIngredientsService {

  constructor(
    public db: AngularFireDatabase
  ) { }

  createIngredient(ingredient: string) {
    const date = new Date().getTime();
    return new Promise((resolve) => {
      this.db.database.ref('ingredient/' + date)
        .set({
          ingredient,
          id: date
        });
      resolve(true);
    });
  }

  getIngredients() {
    return this.db.list('ingredient').valueChanges();
  }

  removeIngredient(element): void {
    this.db.object('ingredient/' + element).remove();
  }
}
