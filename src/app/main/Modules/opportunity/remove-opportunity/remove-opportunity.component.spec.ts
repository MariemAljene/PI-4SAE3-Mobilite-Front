import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveOpportunityComponent } from './remove-opportunity.component';

describe('RemoveOpportunityComponent', () => {
  let component: RemoveOpportunityComponent;
  let fixture: ComponentFixture<RemoveOpportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveOpportunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
