import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService, Note, Statistic } from '../services/data.service';

export interface SavingThrows {
  id: number;
  name: string;
  checked?: boolean;
}

@Component({
  selector: 'dsc-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.less'],
})
export class HomePage {
  public savingThrows: SavingThrows[] = [
    {
      id: 1,
      name: 'Strength',
      checked: false
    },
    {
      id: 2,
      name: 'Dexterity',
      checked: true
    },
    {
      id: 3,
      name: 'Constitution',
      checked: true
    },
    {
      id: 4,
      name: 'Intelligence',
      checked: false
    },
    {
      id: 5,
      name: 'Wisdom',
      checked: false
    },
    {
      id: 6,
      name: 'Charisma',
      checked: true
    },
  ];

  public skills: SavingThrows[] = [
    {
      id: 1,
      name: 'Acrobatics',
      checked: false
    },
    {
      id: 2,
      name: 'Animal Handling',
      checked: true
    },
    {
      id: 3,
      name: 'Arcana',
      checked: false
    },
    {
      id: 4,
      name: 'Athletic',
      checked: true
    },
    {
      id: 5,
      name: 'Deception',
      checked: false
    },
    {
      id: 6,
      name: 'History',
      checked: true
    },
    {
      id: 7,
      name: 'Insight',
      checked: true
    },
    {
      id: 8,
      name: 'Intimidation',
      checked: false
    },
    {
      id: 9,
      name: 'Investigation',
      checked: true
    },
    {
      id: 10,
      name: 'Medicine',
      checked: false
    },
    {
      id: 11,
      name: 'Nature',
      checked: true
    },
    {
      id: 12,
      name: 'Perception',
      checked: false
    },
    {
      id: 13,
      name: 'Performance',
      checked: true
    },
    {
      id: 14,
      name: 'Persuasion',
      checked: true
    },
    {
      id: 15,
      name: 'Religion',
      checked: false
    },
    {
      id: 16,
      name: 'Sleight of Hand',
      checked: true
    },
    {
      id: 17,
      name: 'Stealth',
      checked: false
    },
    {
      id: 18,
      name: 'Survival',
      checked: true
    },
  ];

  stats: Statistic[];
  additionalStats: Statistic[];
  statsLocked = true;
  notes: Note[];

  constructor(private data: DataService) {
    this.stats = this.data.getStatistics();
    this.additionalStats = this.data.getAdditionalStatistics();
    this.notes = this.data.getNotes();
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  handleStatsInputNumber(input) {
    console.log(input);
  }

  toggleStatsLocked() {
    this.statsLocked = !this.statsLocked;
  }

  onQuickNoteSubmit($event) {
    this.data.addNote($event);
  }

}
