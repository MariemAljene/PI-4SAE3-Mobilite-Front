import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueCondidaciesComponent } from './historique-condidacies.component';

describe('HistoriqueCondidaciesComponent', () => {
  let component: HistoriqueCondidaciesComponent;
  let fixture: ComponentFixture<HistoriqueCondidaciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueCondidaciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueCondidaciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
