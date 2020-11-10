import { ModalService, MODALS } from 'src/services/modal.service';
import { BehaviorSubject, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { WordsControllerService } from './words-controller.service';
import { map, finalize, tap } from 'rxjs/operators';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class WordsService {

  private readonly _faults: BehaviorSubject<number> = new BehaviorSubject(null);
  public readonly $faults = this._faults.asObservable();


  private get faults(): number {
    return this._faults.getValue();
  }

  private set faults(value: number) {
    this._faults.next(value);
  }

  private _gameState: BehaviorSubject<GAME_STATE> = new BehaviorSubject(GAME_STATE.BEFORE_START);
  public readonly $gameState = this._gameState.asObservable();


  private get gameState(): GAME_STATE {
    return this._gameState.getValue();
  }

  private set gameState(value: GAME_STATE) {
    this._gameState.next(value);
  }

  public time: number = 0;

  private _timeArray: Array<string> = [];

  get timeArray(): Array<string>{
    return this._timeArray;
  }

  set timeArray(value:  Array<string>){
    this._timeArray = [...this.timeArray, ...value];
  }

  public round: number;

  public alphabet = ['a', "ą", 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', "ł", 'm', 'n', 'o', 'ó', 'p', 'q', 'r', 's', 'ś', 't', 'u', 'w', 'x', 'y', 'z', 'ż'];

  public wrongLetters: Array<string> = [];

  public choosenWords: Array<Word> = [];

  public keyWord = '';

  wordArray: Array<string> = [];
  tempArrWord: Array<string> = [];

  startGame: RoundTime = {seconds: null, minutes: null, hours: null};

  public roundsTimer: Array<RoundTime> = [];

  constructor(private wordsControllerService: WordsControllerService, private modal: ModalService) {
  }

  startNewGame() {
    this.getRandomWords().subscribe(() => {
      this.gameState = GAME_STATE.DURING;
      this.faults = 0;
      this.round = 1;
      this.clearParams();
      this.newKeyWord();
      const newDate = new Date(Date.now());
      this.startGame.minutes = newDate.getMinutes();
      this.startGame.seconds = newDate.getSeconds();
      this.startGame.hours = newDate.getHours();
    })
  }
  
  newKeyWord(){
    this.keyWord = this.choosenWords[this.round - 1].name;
    this.wordArray = this.keyWord.split('').map(l => l.toLowerCase());
    this.tempArrWord = this.wordArray.map(l => l = '');
  }

  wonRound(){
    if(this.round == 5){
      const roundTime = this.setRoundTime();
      this.roundsTimer.push(roundTime);
      this.wonGame();
    }else{
      const roundTime = this.setRoundTime();
      this.roundsTimer.push(roundTime);
      this.modal.open(MODALS.ROUND, {actualRound: this.round, actualRoundTime: roundTime });
    }
  }

  wonGame(){
    this.modal.open(MODALS.SUCCESS, {roundsTime: this.roundsTimer});
  }

  startNextRound(){
    this.round++;
    this.clearParams();
    this.newKeyWord();
    this.setNewStartGameTime()
  }

  gameOver() {
    this.gameState = GAME_STATE.LOOSE;
    this.modal.open(MODALS.FAILED, {});
    this.faults = 0;
    this.wrongLetters = [];
    this.round = 0;
    this.roundsTimer = [];
  }

  wrongLetter(letter: string) {
    this.wrongLetters.push(letter);
    this.faults = this.wrongLetters.length;
    if (this.faults == 6) {
      this.gameOver();
    }
  }

  clearChoosenWords() {
    this.choosenWords = [];
  }

  getRandomWords() {
    return this.wordsControllerService.getWords().pipe(
      map((a: any) => a.words),
      tap(res => {
        this.clearChoosenWords();
        while (this.choosenWords.length < 5) {
          const randomElement = Math.floor(Math.random() * 30);
          if (!this.choosenWords.some((a: any) => a.id == res[randomElement].id)) {
            this.choosenWords.push(res[randomElement]);
          }
        }
      })
    )
  }

  clearParams(){
    this.faults = 0;
    this.wrongLetters = [];
  }

  checkIsLetterCorrect(letter: string) {
    if (this.wrongLetters.indexOf(letter.toLowerCase()) == -1) {
      if (this.wordArray.indexOf(letter.toLowerCase()) > -1) {
        this.wordArray.forEach((l, index) => {
          if (l.toLowerCase() == letter.toLowerCase()) {
            this.tempArrWord[index] = letter;
            if(!this.checkIfWinRound()){
              this.wonRound();
            }
          }
        })
      } else {
        this.wrongLetter(letter.toLowerCase());
      }
    }
  }

  checkIfWinRound(){
    return this.tempArrWord.some(a => a == '');
  }

  trackByFn(index, item) {
    return index;
  }

  setNewStartGameTime(){
    const newTime = new Date(Date.now());
    this.startGame.minutes = newTime.getMinutes();
    this.startGame.seconds = newTime.getSeconds();
    this.startGame.hours = newTime.getHours();
  }

  setRoundTime(): RoundTime{
    const roundTime = new Date(Date.now());
    return {
      hours: null,
      minutes: null,
      seconds: moment(roundTime).unix() -  moment(this.startGame).unix()
    }
  }
}

export enum GAME_STATE {
  WIN,
  BEFORE_START,
  LOOSE,
  DURING
}

export interface Word{
  name: string;
  id: number;
}

export interface RoundTime{
  seconds: number,
  minutes: number,
  hours: number
}