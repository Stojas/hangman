import { WordsService } from './../../../services/words.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hangman-game-word',
  templateUrl: './hangman-game-word.component.html',
  styleUrls: ['./hangman-game-word.component.scss']
})
export class HangmanGameWordComponent implements OnInit {

  constructor(public wordsService: WordsService) { }

  ngOnInit() {
  }

  letterChanged(letter: string) {
    this.wordsService.checkIsLetterCorrect(letter);
  }

}
