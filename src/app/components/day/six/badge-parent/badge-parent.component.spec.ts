import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeParentComponent } from './badge-parent.component';

describe('BadgeParentComponent', () => {
  let component: BadgeParentComponent;
  let fixture: ComponentFixture<BadgeParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BadgeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
