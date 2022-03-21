import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class MockNotesService {
  public constructor() {}

  public getNotes(): Observable<Array<Note>> {
    return of(notes);
  }
}

export interface Note {
  title: string;
  body: string;
}

const notes: Array<Note> = [
  {
    title: 'Mock Note 1',
    body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aperiam. Veniam ipsa voluptatem esse, ratione vel nihil quo, illum similique, cum pariatur deserunt officia iusto laboriosam quod animi quis neque est! Perferendis molestiae magni consequuntur iusto harum? Alias explicabo fuga amet, accusantium, officia aut facilis aliquam porro assumenda iure quaerat fugit, sapiente quasi nostrum. Ipsum nemo, quos temporibus tenetur ipsam voluptates doloribus accusamus cum praesentium. Dicta officia laudantium sit nobis accusamus quos dolor magnam quo!',
  },
  {
    title: 'Mock Note 2',
    body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aperiam. Veniam ipsa voluptatem esse, ratione vel nihil quo, illum similique, cum pariatur deserunt officia iusto laboriosam quod animi quis neque est! Perferendis molestiae magni consequuntur iusto harum? Alias explicabo fuga amet, accusantium, officia aut facilis aliquam porro assumenda iure quaerat fugit, sapiente quasi nostrum. Ipsum nemo, quos temporibus tenetur ipsam voluptates doloribus accusamus cum praesentium. Dicta officia laudantium sit nobis accusamus quos dolor magnam quo!',
  },
];
