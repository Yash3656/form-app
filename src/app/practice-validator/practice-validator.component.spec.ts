import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeValidatorComponent } from './practice-validator.component';

describe('PracticeValidatorComponent', () => {
  let component: PracticeValidatorComponent;
  let fixture: ComponentFixture<PracticeValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
