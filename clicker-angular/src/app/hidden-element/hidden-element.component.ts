import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hidden-element',
  templateUrl: './hidden-element.component.html',
})
export class HiddenElementComponent {
  @Input() minimalShow: number;

  money$: Observable<number>;
  money: number;

  visible = false;

  constructor(private store: Store<{ money: number }>) {}

  ngOnInit() {
    this.money$ = this.store.select('money');

    this.money$.subscribe((money) => (this.money = money));
  }

  ngAfterViewChecked() {
    if (!this.visible && this.minimalShow <= this.money) {
      this.visible = true;
    }
  }
}
