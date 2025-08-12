import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterManager } from './counter-manager';

describe('CounterManager', () => {
  let component: CounterManager;
  let fixture: ComponentFixture<CounterManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
