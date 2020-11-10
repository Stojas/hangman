import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRoundComponent } from './modal-round.component';

describe('ModalRoundComponent', () => {
  let component: ModalRoundComponent;
  let fixture: ComponentFixture<ModalRoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
