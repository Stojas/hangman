import { ModalService, Params } from 'src/services/modal.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-success',
  templateUrl: './modal-success.component.html',
  styleUrls: ['./modal-success.component.scss']
})
export class ModalSuccessComponent implements OnInit {
  rounds =[1,2,3,4,5]
  @Input() params: Params;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  close(){
    this.modalService.close();
  }

}
