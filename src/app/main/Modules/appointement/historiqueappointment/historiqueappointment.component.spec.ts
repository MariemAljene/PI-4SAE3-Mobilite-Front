import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueappointmentComponent } from './historiqueappointment.component';

describe('HistoriqueappointmentComponent', () => {
  let component: HistoriqueappointmentComponent;
  let fixture: ComponentFixture<HistoriqueappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueappointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
