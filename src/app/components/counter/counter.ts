import { Component, computed, effect, input, output } from '@angular/core';
import { PlusIconComponent } from '../icons/plus-icon-component/plus-icon-component';
import { MinusIconComponent } from '../icons/minus-icon-component/minus-icon-component';
import { XIconComponent } from '../icons/x-icon-component/x-icon-component';

@Component({
  selector: 'app-counter',
  imports: [PlusIconComponent, MinusIconComponent, XIconComponent],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  constructor() {
    effect(() => {
      console.log(
        `Giá trị của ${this.nameCounter()} bị thay đổi - Giá trị hiện tại ${this.counter()}`
      );
    });
  }
  nameCounter = input.required<string>();
  counter = input.required<number, number>({
    transform: (value) => {
      return value >= 0 ? value : 0;
    },
  });

  doubleCounter = computed(() => this.counter() * 2);

  incrementEvent = output<void>();
  decrementEvent = output<void>();

  handleIncrement() {
    this.incrementEvent.emit();
  }

  handleDecrement() {
    this.decrementEvent.emit();
  }
}
