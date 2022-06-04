import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Statistic {
  name: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
  type?: string;
}

export interface Note {
  title?: string;
  content?: string;
  creationDate?: string;
  selected?: boolean;
  deleting?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public statistics: Statistic[] = [
    {
      name: 'Strength',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false,
      type: 'stat'
    },
    {
      name: 'Dexterity',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: false,
      type: 'stat'
    },
    {
      name: 'Constitution',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 2,
      read: false,
      type: 'stat'
    },
    {
      name: 'Intelligence',
      subject: 'The situation',
      date: 'Yesterday',
      id: 3,
      read: false,
      type: 'stat'
    },
    {
      name: 'Wisdom',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      read: false,
      type: 'stat'
    },
    {
      name: 'Charisma',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      read: false,
      type: 'stat'
    }
  ];

  public additionalStats: Statistic[] = [
    {
      name: 'Initiative',
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6,
      read: false,
      type: 'speed'
    },
    {
      name: 'Speed',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7,
      read: false,
      type: 'speed'
    },
    {
      name: 'Armor',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7,
      read: false,
      type: 'armor'
    }
  ];

  public notes: Note[] = [
    {
      title: 'Note One',
      content: 'Dummy quick note preview try ellipsis on text contents note content lorem.'
    },
    {
      title: 'Note Two',
      content: 'Dummy quick note preview try ellipsis on text contents note content lorem.'
    },
    {
      title: 'Note Three',
      content: 'Dummy quick note preview try ellipsis on text contents note content lorem.'
    }
  ];

  constructor(private http: HttpClient) { }

  public getStatistics(): Statistic[] {
    return this.statistics;
  }

  public getStatisticById(id: number): Statistic {
    return this.statistics[id];
  }

  public getAdditionalStatistics(): Statistic[] {
    return this.additionalStats;
  }

  public getAdditionalStatisticsById(id: number): Statistic {
    return this.additionalStats[id];
  }

  public getNotes(): Note[] {
    return this.notes;
  }

  public addNote(note: Note): void {
    const newNote = {...note};
    this.notes.push(newNote);
  }

  public deleteNote(noteToDelete: Note): void {
    this.notes = [...this.notes.filter(note => note !== noteToDelete)];
  }

  public getClass(): Observable<any> {
    const api = 'https://www.dnd5eapi.co/api/classes/warlock';
    return this.http.get(api);
  }
}
