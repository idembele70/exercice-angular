import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayDynamicComponent } from './form-array-dynamic.component';

describe('FormArrayDynamicComponent', () => {
  let component: FormArrayDynamicComponent;
  let fixture: ComponentFixture<FormArrayDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormArrayDynamicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormArrayDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
