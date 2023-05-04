import { Component } from '@angular/core';
import { ACHIEVEMENTS } from './achievements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tabIndex = 0;

  achivements = ACHIEVEMENTS;
  alerted = false;

  ngDoCheck() {}

  setTabIndex(num: number) {
    this.tabIndex = num;
  }
}
