import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { MockNotesService } from './services/mock-notes/mock-notes.service';
import { NotesService } from './services/notes/notes.service';

const IS_PROD = true;

@NgModule({
  declarations: [AppComponent, NotesListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    // {
    //   provide: NotesService,
    //   useClass: IS_PROD ? NotesService : MockNotesService,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
