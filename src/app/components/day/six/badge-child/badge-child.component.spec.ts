import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeChildComponent } from './badge-child.component';

describe('BadgeChildComponent', () => {
  let component: BadgeChildComponent;
  let fixture: ComponentFixture<BadgeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BadgeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
