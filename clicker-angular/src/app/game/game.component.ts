import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { changeMoneyByAmount } from '../store/money.actions';
import { Store } from '@ngrx/store';
import {
  Building,
  buildingShowingValue,
  buildingTruePrice,
  buildingsGain,
} from '../gameElements/buildings';
import { buyBuilding, unlockBuilding } from '../store/buildings.actions';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  money$: Observable<number>;
  buildings$: Observable<Array<Building>>;

  money: number;
  buildings: Array<Building>;
  buildingsGain: number;

  interval: number;
  date: Date = new Date();
  event: ((this: Document, ev: Event) => any) | null = null;

  constructor(
    private store: Store<{ money: number; buildings: Array<Building> }>
  ) {}

  ngOnInit() {
    this.money$ = this.store.select('money');
    this.buildings$ = this.store.select('buildings');

    this.money$.subscribe((money) => (this.money = money));

    this.buildings$.subscribe((buildings) => {
      this.buildingsGain = buildingsGain(buildings);
      this.buildings = buildings;
    });
  }

  ngDoCheck() {
    if (this.interval) {
      clearInterval(this.interval);
    }

    this.interval = window.setInterval(() => {
      this.store.dispatch(
        changeMoneyByAmount({ amount: this.buildingsGain / 10 })
      );
    }, 100);

    this.buildings.forEach((building) => {
      if (
        !building.isUnlocked &&
        buildingShowingValue(building) <= this.money
      ) {
        this.store.dispatch(unlockBuilding({ building }));
      }
    });

    if (this.event) {
      document.removeEventListener('visibilitychange', this.event);
    }
    this.event = () => {
      if (document.hidden) {
        console.log('hidden');
        this.date = new Date();
      } else {
        console.log('reveal');
        const nowDate = new Date();
        const delay = nowDate.getTime() - this.date.getTime();
        const reward = buildingsGain(this.buildings);
        this.store.dispatch(
          changeMoneyByAmount({ amount: reward * Math.floor(delay / 1000) })
        );
      }
    };
    document.addEventListener('visibilitychange', this.event);
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

  buildingsUnlocked() {
    return this.buildings.filter((building) => building.isUnlocked);
  }
}
