import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceRecognitionComponent } from './voice-recognition.component';

describe('VoiceRecognitionComponent', () => {
  let component: VoiceRecognitionComponent;
  let fixture: ComponentFixture<VoiceRecognitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceRecognitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
