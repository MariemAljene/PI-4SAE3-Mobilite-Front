import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOpportunityComponent } from './edit-opportunity.component';

describe('EditOpportunityComponent', () => {
  let component: EditOpportunityComponent;
  let fixture: ComponentFixture<EditOpportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOpportunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
