import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDocupdateComponent } from './admin-docupdate.component';

describe('AdminDocupdateComponent', () => {
  let component: AdminDocupdateComponent;
  let fixture: ComponentFixture<AdminDocupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDocupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDocupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
