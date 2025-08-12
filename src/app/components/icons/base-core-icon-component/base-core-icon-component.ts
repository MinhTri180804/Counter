import { Component, input } from '@angular/core';

@Component({
  selector: 'app-base-core-icon-component',
  imports: [],
  templateUrl: './base-core-icon-component.html',
  styleUrl: './base-core-icon-component.css',
})
export abstract class BaseCoreIconComponent {
  size = input<number>(24);
  color = input<string>('currentColor');
  strokeWidth = input<number>(2);
  classname = input<string>('');
}
