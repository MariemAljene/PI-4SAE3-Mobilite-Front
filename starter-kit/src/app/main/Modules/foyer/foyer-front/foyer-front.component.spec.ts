import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerFrontComponent } from './foyer-front.component';

describe('FoyerFrontComponent', () => {
  let component: FoyerFrontComponent;
  let fixture: ComponentFixture<FoyerFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoyerFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoyerFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
