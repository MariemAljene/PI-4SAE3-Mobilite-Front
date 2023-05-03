import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityDetailsListComponent } from './opportunity-details-list.component';

describe('OpportunityDetailsListComponent', () => {
  let component: OpportunityDetailsListComponent;
  let fixture: ComponentFixture<OpportunityDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunityDetailsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
