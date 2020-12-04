import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSearchdocComponent } from './patient-searchdoc.component';

describe('PatientSearchdocComponent', () => {
  let component: PatientSearchdocComponent;
  let fixture: ComponentFixture<PatientSearchdocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientSearchdocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSearchdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
