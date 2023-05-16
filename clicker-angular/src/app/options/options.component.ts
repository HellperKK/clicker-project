import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Building } from '../gameElements/buildings';
import { resetMoney, setMoney } from '../store/money.actions';
import { resetBuildings, setBuildings } from '../store/buildings.actions';
import { download } from '../utils/download';
import { openFiles } from '../utils/openfiles';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
})
export class OptionsComponent {
  money$: Observable<number>;
  buildings$: Observable<Array<Building>>;

  money: number;
  buildings: Array<Building>;

  interval: number;

  constructor(
    private store: Store<{ money: number; buildings: Array<Building> }>
  ) {}

  ngOnInit() {
    this.money$ = this.store.select('money');
    this.buildings$ = this.store.select('buildings');

    this.money$.subscribe((money) => (this.money = money));

    this.buildings$.subscribe((buildings) => (this.buildings = buildings));
  }

  reset() {
    this.store.dispatch(resetMoney());
    this.store.dispatch(resetBuildings());
  }

  save() {
    const state = {
      buildings: this.buildings,
      money: this.money,
    };
    localStorage.setItem('save', JSON.stringify(state));
  }

  load() {
    const save = localStorage.getItem('save');
    if (save !== null) {
      const state = JSON.parse(save);
      this.store.dispatch(setMoney({ amount: state.money }));
      this.store.dispatch(setBuildings({ buildings: state.buildings }));
    }
  }

  exportSave() {
    const state = {
      buildings: this.buildings,
      money: this.money,
    };
    download('save.json', JSON.stringify(state));
  }

  async importSave() {
    const files = await openFiles();
    const file = files[0];

    if (file) {
      const content = await file.text();
      const state = JSON.parse(content);
      this.store.dispatch(setMoney({ amount: state.money }));
      this.store.dispatch(setBuildings({ buildings: state.buildings }));
    }
  }
}
