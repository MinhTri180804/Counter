import { Component } from '@angular/core';
import { CounterManager } from './components/counter-manager/counter-manager';

@Component({
  selector: 'app-root',
  imports: [CounterManager],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
