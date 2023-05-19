import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OptionsComponent } from './options/options.component';
import { StoreModule } from '@ngrx/store';
import { GameComponent } from './game/game.component';
import { FormatNumberPipe } from './format-number.pipe';

import { moneyReducer } from './store/money.reducer';
import { buildingsReducer } from './store/buildings.reducer';
import { AchivementsTabComponent } from './achivements-tab/achivements-tab.component';
import { achievementsReducer } from './store/achievements.reducer';

@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    GameComponent,
    FormatNumberPipe,
    AchivementsTabComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      money: moneyReducer,
      buildings: buildingsReducer,
      achievements: achievementsReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
