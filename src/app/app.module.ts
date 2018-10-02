import { environment } from './../environments/environment.prod';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { EditListComponent } from './components/edit-list/edit-list.component';
import { ShowListComponent } from './components/show-list/show-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EditListComponent,
    ShowListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
