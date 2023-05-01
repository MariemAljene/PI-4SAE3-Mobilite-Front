import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityChartComponent } from './speciality-chart.component';

describe('SpecialityChartComponent', () => {
  let component: SpecialityChartComponent;
  let fixture: ComponentFixture<SpecialityChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialityChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
