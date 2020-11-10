import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HangmanGameComponent } from './hangman-game.component';

const routes: Routes = [
  {path: '', component: HangmanGameComponent}
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HangmanRoutingModule { }
