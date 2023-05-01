import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { changeMoneyByAmount } from '../money.actions';
import { Store } from '@ngrx/store';
import {
  Building,
  buildingShowingValue,
  buildingTruePrice,
  buildingsGain,
} from '../buildings';
import { buyBuilding } from '../buildings.actions';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  money$: Observable<number>;
  buildings$: Observable<Array<Building>>;

  money: number;
  buildingsGain: number;

  interval: number;

  constructor(
    private store: Store<{ money: number; buildings: Array<Building> }>
  ) {}

  ngOnInit() {
    this.money$ = this.store.select('money');
    this.buildings$ = this.store.select('buildings');

    this.money$.subscribe((money) => (this.money = money));

    this.buildings$.subscribe(
      (buildings) => (this.buildingsGain = buildingsGain(buildings))
    );
  }

  ngAfterViewChecked() {
    if (this.interval) {
      clearInterval(this.interval);
    }

    this.interval = window.setInterval(() => {
      this.store.dispatch(
        changeMoneyByAmount({ amount: this.buildingsGain / 10 })
      );
    }, 100);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  changeMoneyByAmount(amount: number) {
    this.store.dispatch(changeMoneyByAmount({ amount }));
  }

  buyBuilding(building: Building) {
    this.store.dispatch(buyBuilding({ building }));
    this.store.dispatch(
      changeMoneyByAmount({ amount: -buildingTruePrice(building) })
    );
  }

  buildingTruePrice(building: Building) {
    return buildingTruePrice(building);
  }

  buildingTitle(building: Building) {
    return `${building.desc} (${building.moneyGain} /s)`;
  }

  buildingShowingValue(building: Building) {
    return buildingShowingValue(building);
  }
}
