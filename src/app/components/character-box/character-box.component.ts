import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'dsc-character-box',
  templateUrl: './character-box.component.html',
  styleUrls: ['./character-box.component.scss'],
})
export class CharacterBoxComponent implements OnInit {

  @ViewChild(IonModal) quickInfoModal: IonModal;

  warlockClass: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getClass().subscribe(response => this.warlockClass = response);
  }

  openQuickInfoModal() {
    this.quickInfoModal.present();
  }

  closeQuickInfoModal() {
    this.quickInfoModal.dismiss();
  }

}
