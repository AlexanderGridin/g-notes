import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { INJECTION_TOKEN } from './components/notes-list/notes-list.component';

@NgModule({
  declarations: [AppComponent, NotesListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
