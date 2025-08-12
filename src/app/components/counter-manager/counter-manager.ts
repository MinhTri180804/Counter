import { Component, model, signal } from '@angular/core';
import { Counter } from '../counter/counter';

@Component({
  selector: 'app-counter-manager',
  imports: [Counter],
  templateUrl: './counter-manager.html',
  styleUrl: './counter-manager.css',
})
export class CounterManager {
  firstCounter = signal<number>(0);
  secondCounter = signal<number>(0);

  handleFirstCounterIncrement() {
    this.firstCounter.update((previous) => previous + 1);
  }

  handleFirstCounterDecrement() {
    if (this.firstCounter() > 0) {
      this.firstCounter.update((previous) => previous - 1);
    }
  }

  handleSecondCounterIncrement() {
    this.secondCounter.update((previous) => previous + 1);
  }

  handleSecondCounterDecrement() {
    if (this.secondCounter() > 0) {
      this.secondCounter.update((previous) => previous - 1);
    }
  }

  handleIncrementAll() {
    this.handleFirstCounterIncrement();
    this.handleSecondCounterIncrement();
  }

  handleDecrementAll() {
    this.handleFirstCounterDecrement();
    this.handleSecondCounterDecrement();
  }
}
