import { Component } from '@angular/core';
import { ACHIEVEMENTS } from './gameElements/achievements';
import { Observable } from 'rxjs';
import { Building } from './gameElements/buildings';
import { Store } from '@ngrx/store';
import { produce } from 'immer';
import { Achievement } from './gameElements/achievements';
import { achivementUnlockable } from './gameElements/achivementsUtils';
import { state } from '@angular/animations';
import GameState from './utils/Gamestate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  money$: Observable<number>;
  buildings$: Observable<Array<Building>>;
  achievements$: Observable<Array<Achievement>>;

  money: number;
  buildings: Array<Building>;
  achievements: Array<Achievement>;
  tabIndex = 0;

  alerted = false;

  constructor(
    private store: Store<{
      money: number;
      buildings: Array<Building>;
      achievements: Array<Achievement>;
    }>
  ) {}

  ngOnInit() {
    this.money$ = this.store.select('money');
    this.buildings$ = this.store.select('buildings');
    this.achievements$ = this.store.select('achievements');

    this.money$.subscribe((money) => (this.money = money));
    this.buildings$.subscribe((buildings) => (this.buildings = buildings));
    this.achievements$.subscribe(
      (achievements) => (this.achievements = achievements)
    );
  }

  ngDoCheck() {
    const gameState: GameState = {
      money: this.money,
      buildings: this.buildings,
      achievements: this.achievements,
    };

    this.achievements.forEach((achivement: Achievement, index: number) => {
      if (
        !achivement.isDiscovered &&
        achivementUnlockable(gameState, achivement)
      ) {
        this.achievements = produce(
          this.achievements,
          (draft: Array<Achievement>) => {
            draft[index].isDiscovered = true;
          }
        );
        this.alerted = true;
      }
    });
  }

  setTabIndex(num: number) {
    this.tabIndex = num;
  }
}
