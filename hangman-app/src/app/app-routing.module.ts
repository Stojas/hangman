import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialPageComponent } from 'src/components/initial-page/initial-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: InitialPageComponent},
  {path: 'hangman', loadChildren: () => import('../components/hangman-game/hangman-game.module').then(m => m.HangmanGameModule)}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
