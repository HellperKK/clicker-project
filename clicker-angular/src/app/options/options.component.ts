import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Building } from '../gameElements/buildings';
import { resetMoney, setMoney } from '../store/money.actions';
import { resetBuildings, setBuildings } from '../store/buildings.actions';
import { download } from '../utils/download';
import { openFiles } from '../utils/openfiles';
import {
  resetAchievements,
  setAchievements,
} from '../store/achievements.actions';
import GameState from '../utils/Gamestate';
import { Achievement } from '../gameElements/achievements';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
})
export class OptionsComponent {
  money$: Observable<number>;
  buildings$: Observable<Array<Building>>;
  achievements$: Observable<Array<Achievement>>;

  money: number;
  buildings: Array<Building>;
  achievements: Array<Achievement>;

  interval: number;

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

  reset() {
    this.store.dispatch(resetMoney());
    this.store.dispatch(resetBuildings());
    this.store.dispatch(resetAchievements());
  }

  save() {
    const state: GameState = {
      buildings: this.buildings,
      money: this.money,
      achievements: this.achievements,
    };
    localStorage.setItem('save', JSON.stringify(state));
  }

  load() {
    const save = localStorage.getItem('save');
    if (save !== null) {
      const state: GameState = JSON.parse(save);
      this.store.dispatch(setMoney({ amount: state.money }));
      this.store.dispatch(setBuildings({ buildings: state.buildings }));
      this.store.dispatch(
        setAchievements({ achievements: state.achievements })
      );
    }
  }

  exportSave() {
    const state: GameState = {
      buildings: this.buildings,
      money: this.money,
      achievements: this.achievements,
    };
    download('save.json', JSON.stringify(state));
  }

  async importSave() {
    const files = await openFiles();
    const file = files[0];

    if (file) {
      const content = await file.text();
      const state: GameState = JSON.parse(content);
      this.store.dispatch(setMoney({ amount: state.money }));
      this.store.dispatch(setBuildings({ buildings: state.buildings }));
      this.store.dispatch(
        setAchievements({ achievements: state.achievements })
      );
    }
  }
}
