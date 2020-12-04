import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManagepatientComponent } from './admin-managepatient.component';

describe('AdminManagepatientComponent', () => {
  let component: AdminManagepatientComponent;
  let fixture: ComponentFixture<AdminManagepatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManagepatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManagepatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
