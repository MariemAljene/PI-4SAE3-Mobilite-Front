import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCondidacyComponent } from './add-condidacy.component';

describe('AddCondidacyComponent', () => {
  let component: AddCondidacyComponent;
  let fixture: ComponentFixture<AddCondidacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCondidacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCondidacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
