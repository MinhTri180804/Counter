import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCoreIconComponent } from './base-core-icon-component';

describe('BaseCoreIconComponent', () => {
  let component: BaseCoreIconComponent;
  let fixture: ComponentFixture<BaseCoreIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseCoreIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseCoreIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
