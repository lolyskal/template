import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAgrementComponent } from './edit-agrement.component';

describe('EditAgrementComponent', () => {
  let component: EditAgrementComponent;
  let fixture: ComponentFixture<EditAgrementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAgrementComponent]
    });
    fixture = TestBed.createComponent(EditAgrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
