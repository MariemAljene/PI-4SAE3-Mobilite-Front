import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterReponseComponent } from './ajouter-reponse.component';

describe('AjouterReponseComponent', () => {
  let component: AjouterReponseComponent;
  let fixture: ComponentFixture<AjouterReponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterReponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterReponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
