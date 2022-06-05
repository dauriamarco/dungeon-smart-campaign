import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonPopover, PopoverController } from '@ionic/angular';
import { DataService, Note } from 'src/app/services/data.service';
import { ContextMenuComponent } from '../context-menu/context-menu.component';

@Component({
  selector: 'dsc-quick-notes',
  templateUrl: './quick-notes.component.html',
  styleUrls: ['./quick-notes.component.less'],
})
export class QuickNotesComponent implements OnInit, AfterViewInit {

  @ViewChild(IonPopover) contextMenu: IonPopover;
  @ViewChild('noteList', { static: false }) noteList: ElementRef<HTMLElement>;

  @Input() notes: Note[];
  @Output() quickNoteSubmitted = new EventEmitter<Note>();

  quickNote: Note = {};
  noteElementList: Element[];

  constructor(private data: DataService) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.noteElementList = Array.from(this.noteList.nativeElement.children);
    this.addDeleteNoteListener();
  }

  onSubmit(quickNoteForm: NgForm) {
    // this.quickNoteSubmitted.emit(this.quickNote);
    this.data.addNote(this.quickNote);
    quickNoteForm.resetForm();
    setTimeout(() => {
      this.noteElementList = Array.from(this.noteList.nativeElement.children);
      this.addDeleteNoteListener();
    });
  }

  addDeleteAnimation(noteToDelete) {
    noteToDelete.selected = true;
    this.notes.filter(note => note.selected || note === noteToDelete)
      .forEach(selectedNote => selectedNote.deleting = true);
  }

  addDeleteNoteListener() {
    this.noteElementList.forEach(noteEl => noteEl.addEventListener('animationend', (e: AnimationEvent) => {
      if (e.animationName === 'disappear') {
        this.deleteSelectedNotes();
      }
    }));
  }

  deleteSelectedNotes(noteToDelete?) {
    this.notes.filter(note => note.selected || note === noteToDelete)
      .forEach(selectedNote => {
        this.data.deleteNote(selectedNote);
      });
    this.notes = this.data.getNotes();
  }


  toggleSelected(noteToSelect, event) {
    if (!event.shiftKey) {
      this.deselectNotes();
    }
    noteToSelect.selected = !noteToSelect.selected;
  }

  deselectNotes() {
    this.notes.forEach(note => {
      if (note.selected) {
        note.selected = false;
      }
    });
  }

  openContextMenu(ev: MouseEvent) {
    ev.preventDefault();
    ev.stopPropagation();
    this.contextMenuClick(ev);
  }

  closeContextMenu() {
    this.contextMenu.dismiss();
  }

  private contextMenuClick(event: MouseEvent){
    const element = (event.target as HTMLElement);
    const evt = element.ownerDocument.createEvent('MouseEvents');
    const RIGHT_CLICK_BUTTON_CODE = 2;

    evt.initMouseEvent('contextmenu', true, true,
         element.ownerDocument.defaultView, 1, event.x, event.y, event.clientX, event.clientY, false,
         false, false, false, RIGHT_CLICK_BUTTON_CODE, null);

    return !element.dispatchEvent(evt);
}

}
