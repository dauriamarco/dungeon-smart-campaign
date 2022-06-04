import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dsc-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  isDarkMode: boolean;
  flyOutMenuOpen = false;

  constructor() { }

  ngOnInit() {
    this.isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  toggleFlyOutMenu() {
    this.flyOutMenuOpen = !this.flyOutMenuOpen;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode');
  }

}
