import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { CharacterBoxComponent } from '../components/character-box/character-box.component';
import { StatFrameComponent } from '../components/stat-frame/stat-frame.component';
import { QuickNotesComponent } from '../components/quick-notes/quick-notes.component';
import { ContextMenuComponent } from '../components/context-menu/context-menu.component';
import { NoteInputComponent } from '../components/note-input/note-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    CharacterBoxComponent,
    StatFrameComponent,
    QuickNotesComponent,
    NoteInputComponent,
    ContextMenuComponent
  ]
})
export class HomePageModule {}
