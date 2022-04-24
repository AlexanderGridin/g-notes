import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { TestPipePipe } from './pipes/test-pipe/test-pipe.pipe';
import { TestDirectiveDirective } from './directives/test-directive.directive';

@NgModule({
  declarations: [AppComponent, NotesListComponent, TestPipePipe, TestDirectiveDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
