import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OptionsComponent } from './options/options.component';
import { StoreModule } from '@ngrx/store';
import { GameComponent } from './game/game.component';
import { FormatNumberPipe } from './format-number.pipe';

import { moneyReducer } from './money.reducer';
import { buildingsReducer } from './buildings.reducer';
import { HiddenElementComponent } from './hidden-element/hidden-element.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    GameComponent,
    FormatNumberPipe,
    HiddenElementComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ money: moneyReducer, buildings: buildingsReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
