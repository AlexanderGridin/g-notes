import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { Note, NotesService } from 'src/app/services/notes/notes.service';

export interface User {
  name: string;
  age: number;
}

export const INJECTION_TOKEN = new InjectionToken<User>('URL', {
  providedIn: 'root',
  factory: () => ({
    name: 'test',
    age: 25,
  }),
});
@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
  providers: [{ provide: NotesService, useClass: NotesService }],
})
export class NotesListComponent implements OnInit {
  public notes!: Array<Note>;

  public constructor(
    private readonly service: NotesService,
    @Inject(INJECTION_TOKEN) private readonly user: User
  ) {}

  public ngOnInit(): void {
    console.log(this.user);

    this.service.getNotes().subscribe((notes: Array<Note>) => {
      this.notes = notes;
    });
  }
}
