import { Component, OnInit } from '@angular/core';
import { ModalService, MODALS } from 'src/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  MODALS = MODALS;

  constructor(private modalService: ModalService) { 
  }

  ngOnInit() {
  }
}
