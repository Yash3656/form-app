import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeModelformComponent } from './practice-modelform.component';

describe('PracticeModelformComponent', () => {
  let component: PracticeModelformComponent;
  let fixture: ComponentFixture<PracticeModelformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeModelformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeModelformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
