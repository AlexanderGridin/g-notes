import { Component, OnInit } from '@angular/core';
import { Note, NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
  providers: [{ provide: NotesService, useClass: NotesService }],
})
export class NotesListComponent implements OnInit {
  public notes!: Array<Note>;

  public constructor(private readonly service: NotesService) {}

  public ngOnInit(): void {
    this.service.getNotes().subscribe((notes: Array<Note>) => {
      this.notes = notes;
    });
  }
}
