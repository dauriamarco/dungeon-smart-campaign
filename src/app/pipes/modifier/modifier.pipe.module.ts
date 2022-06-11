import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifierPipe } from './modifier.pipe';



@NgModule({
  declarations: [ModifierPipe],
  exports: [ModifierPipe],
  imports: [
    CommonModule
  ]
})
export class ModifierPipeModule { }
