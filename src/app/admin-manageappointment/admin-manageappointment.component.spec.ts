import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageappointmentComponent } from './admin-manageappointment.component';

describe('AdminManageappointmentComponent', () => {
  let component: AdminManageappointmentComponent;
  let fixture: ComponentFixture<AdminManageappointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageappointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
