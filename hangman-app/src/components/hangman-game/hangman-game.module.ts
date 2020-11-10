import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangmanGameComponent } from './hangman-game.component';
import { HangmanRoutingModule } from './hangman-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnlyLettersDirective } from 'src/directives/only-letters.directive';
import { HangmanGameWordComponent } from './hangman-game-word/hangman-game-word.component';

@NgModule({
  declarations: [
    HangmanGameComponent,
    OnlyLettersDirective,
    HangmanGameWordComponent
  ],
  imports: [
    CommonModule,
    HangmanRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HangmanGameComponent
  ]
})
export class HangmanGameModule { }
