import { ModalComponent } from './modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalSuccessComponent } from './modal-components/modal-success/modal-success.component';
import { ModalFailedComponent } from './modal-components/modal-failed/modal-failed.component';
import { RouterModule } from '@angular/router';
import { ModalRoundComponent } from './modal-components/modal-round/modal-round.component';

@NgModule({
  declarations: [
    ModalComponent,
    ModalSuccessComponent,
    ModalFailedComponent,
    ModalRoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ModalComponent
  ]
})
export class ModalModule { }
