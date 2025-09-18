import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedCounterComponent } from './advanced-counter.component';

describe('AdvancedCounterComponent', () => {
  let component: AdvancedCounterComponent;
  let fixture: ComponentFixture<AdvancedCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvancedCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvancedCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
