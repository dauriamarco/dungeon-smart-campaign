import { Component, Input, OnInit } from '@angular/core';
import { Statistic } from 'src/app/services/data.service';

@Component({
  selector: 'dsc-stat-frame',
  templateUrl: './stat-frame.component.html',
  styleUrls: ['./stat-frame.component.less'],
})
export class StatFrameComponent implements OnInit {

  @Input() stat: Statistic;
  @Input() readonly: boolean;
  @Input() frameClass: string;

  constructor() { }

  ngOnInit() {}

}
