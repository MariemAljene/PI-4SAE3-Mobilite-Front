import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityListFrontComponent } from './opportunity-list-front.component';

describe('OpportunityListFrontComponent', () => {
  let component: OpportunityListFrontComponent;
  let fixture: ComponentFixture<OpportunityListFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunityListFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityListFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
