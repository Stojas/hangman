import { RoundTime } from './words.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private readonly _modalOpened: BehaviorSubject<boolean> = new BehaviorSubject(false);
  readonly $modalOpened = this._modalOpened.asObservable();

  private get modalOpened(): boolean {
    return this._modalOpened.getValue();
  }

  private set modalOpened(val: boolean) {
    this._modalOpened.next(val);
  }

  public modalType: MODALS = MODALS.SUCCESS;
  
  public params: Params = {};

  constructor() { }

  open(openModal: MODALS, params: Params) {
    this.params = params;
    this.modalType = openModal;
    this.modalOpened = true;
  }

  close() {
    this.modalOpened = false;
  }
}

export enum MODALS{
  SUCCESS,
  FAILED,
  ROUND
}

export interface Params{
  actualRound?: number,
  roundsTime?: Array<RoundTime>,
  actualRoundTime?: RoundTime
}
