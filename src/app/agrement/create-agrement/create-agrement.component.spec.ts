import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAgrementComponent } from './create-agrement.component';

describe('CreateAgrementComponent', () => {
  let component: CreateAgrementComponent;
  let fixture: ComponentFixture<CreateAgrementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAgrementComponent]
    });
    fixture = TestBed.createComponent(CreateAgrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
