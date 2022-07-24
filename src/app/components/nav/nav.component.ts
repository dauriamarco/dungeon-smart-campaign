import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Gesture, GestureController } from '@ionic/angular';

@Component({
  selector: 'dsc-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less'],
})
export class NavComponent implements OnInit, AfterViewInit, OnDestroy {
  
  @ViewChild('mobileNavBar') mobNavbar: ElementRef<HTMLElement>;

  isDarkMode: boolean;
  flyOutMenuOpen = false;
  gesture: Gesture;

  constructor(private gestureCtrl: GestureController) { }

  ngOnInit() {
    this._initializeDarkMode();
  }

  ngAfterViewInit(): void {
    this.gesture = this.gestureCtrl.create({
      el: this.mobNavbar.nativeElement,
      disableScroll: true,
      threshold: 15,
      direction: 'x',
      gestureName: 'hide-nav-gesture',
      onWillStart: async () => this.mobNavbar.nativeElement.classList.add('dragging'),
      onMove: detail => this.onMoveHandler(detail),
      onEnd: detail => this.onEndMoveHandler(detail), 
    }, true);
    // The `true` above ensures that callbacks run inside NgZone.
    this.gesture.enable();
  }

  ngOnDestroy(): void {
    this.gesture.destroy();
  }

  toggleFlyOutMenu() {
    this.flyOutMenuOpen = !this.flyOutMenuOpen;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.add(this.isDarkMode ? 'dark-mode' : 'light-mode');
    document.body.classList.remove(this.isDarkMode ? 'light-mode' : 'dark-mode');
    localStorage.setItem('isDarkMode', '' + this.isDarkMode);
  }

  onMoveHandler(detail) {
    const deltaX = Math.floor(detail.deltaX);
    this.mobNavbar.nativeElement.style.transform = `translateX(${deltaX}px)`
  }

  onEndMoveHandler(detail) {
    this.mobNavbar.nativeElement.classList.remove('dragging');
    const deltaX = Math.floor(detail.deltaX);
    if (deltaX < -100) {
      this.mobNavbar.nativeElement.classList.add('hide-nav');
      this.mobNavbar.nativeElement.style.transform = `translateX(-425px)`
    } else {
      this.mobNavbar.nativeElement.style.transform = `translateX(0px)`
    }
  }

  toggleMobileNavBar() {
    this.mobNavbar.nativeElement.classList.toggle('hide-nav');
    this.mobNavbar.nativeElement.style.transform = `translateX(0px)`
  }

  private _initializeDarkMode() {
    const darkModeString = localStorage.getItem('isDarkMode');
    if(!darkModeString) {
      this.isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
      this.isDarkMode = darkModeString === 'true';
    }
  }

}
