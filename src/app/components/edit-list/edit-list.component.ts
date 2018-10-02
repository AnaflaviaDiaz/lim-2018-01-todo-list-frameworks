import { Component, OnInit } from '@angular/core';
import { CrudFireIngredientsService } from '../../services/crud-fire-ingredients.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

  constructor(
    public _crudFire: CrudFireIngredientsService
  ) { }

  ngOnInit() {
  }

  add(value): void {
    console.log(value);
    this._crudFire.createIngredient(value).then(console.log);
  }
}
