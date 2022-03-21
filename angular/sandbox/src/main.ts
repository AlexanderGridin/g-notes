import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { NotesService } from './app/services/notes/notes.service';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((appRef) => {
    const injector = appRef.injector;
    const notesService = injector.get(NotesService);
    notesService.getNotes().subscribe((notes) => {
      console.log(notes);
    });
  })
  .catch((err) => console.error(err));