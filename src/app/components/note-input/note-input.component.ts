import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dsc-note-input',
  templateUrl: './note-input.component.html',
  styleUrls: ['./note-input.component.scss'],
})
export class NoteInputComponent implements OnInit {
  readonly = true;

  constructor() { }

  ngOnInit() {}

  toggleEditMode() {
    this.readonly = !this.readonly;
  }
}
