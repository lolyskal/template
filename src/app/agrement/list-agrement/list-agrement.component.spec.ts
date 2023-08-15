import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAgrementComponent } from './list-agrement.component';

describe('ListAgrementComponent', () => {
  let component: ListAgrementComponent;
  let fixture: ComponentFixture<ListAgrementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAgrementComponent]
    });
    fixture = TestBed.createComponent(ListAgrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
