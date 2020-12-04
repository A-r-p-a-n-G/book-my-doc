import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManagedocComponent } from './admin-managedoc.component';

describe('AdminManagedocComponent', () => {
  let component: AdminManagedocComponent;
  let fixture: ComponentFixture<AdminManagedocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManagedocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManagedocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
