import { Component, OnInit, Input } from '@angular/core';
import { ModalService, Params } from 'src/services/modal.service';

@Component({
  selector: 'app-modal-failed',
  templateUrl: './modal-failed.component.html',
  styleUrls: ['./modal-failed.component.scss']
})
export class ModalFailedComponent implements OnInit {

  @Input() params: Params;
  
  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  close(){
    this.modalService.close();
  }


}
