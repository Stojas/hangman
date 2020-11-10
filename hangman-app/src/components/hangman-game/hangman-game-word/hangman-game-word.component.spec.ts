import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanGameWordComponent } from './hangman-game-word.component';

describe('HangmanGameWordComponent', () => {
  let component: HangmanGameWordComponent;
  let fixture: ComponentFixture<HangmanGameWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangmanGameWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangmanGameWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
