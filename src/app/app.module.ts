import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { EditListComponent } from './components/edit-list/edit-list.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { environment } from '../environments/environment';
import { CrudFireIngredientsService } from './services/crud-fire-ingredients.service';
// import * as  firebase from 'firebase';
// firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    EditListComponent,
    ShowListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [CrudFireIngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
