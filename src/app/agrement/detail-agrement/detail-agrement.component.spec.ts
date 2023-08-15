import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAgrementComponent } from './detail-agrement.component';

describe('DetailAgrementComponent', () => {
  let component: DetailAgrementComponent;
  let fixture: ComponentFixture<DetailAgrementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailAgrementComponent]
    });
    fixture = TestBed.createComponent(DetailAgrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
