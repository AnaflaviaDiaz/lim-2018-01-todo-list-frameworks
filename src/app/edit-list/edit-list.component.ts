import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

  // texto: string;

  constructor() { }

  ngOnInit() {
  }

  add(value): void {
    console.log(value);
  }

}
