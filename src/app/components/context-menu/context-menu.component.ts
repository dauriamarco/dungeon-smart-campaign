import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'dsc-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
})
export class ContextMenuComponent implements OnInit {

  constructor(private popover: PopoverController) { }

  ngOnInit() {}

  onSelection(action: string) {
    this.popover.dismiss({ action });
  }

}
