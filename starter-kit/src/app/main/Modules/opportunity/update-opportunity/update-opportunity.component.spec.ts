import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOpportunityComponent } from './update-opportunity.component';

describe('UpdateOpportunityComponent', () => {
  let component: UpdateOpportunityComponent;
  let fixture: ComponentFixture<UpdateOpportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOpportunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
