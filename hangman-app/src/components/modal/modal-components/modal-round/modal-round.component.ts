import { WordsService } from './../../../../services/words.service';
import { ModalService, Params } from 'src/services/modal.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-round',
  templateUrl: './modal-round.component.html',
  styleUrls: ['./modal-round.component.scss']
})
export class ModalRoundComponent implements OnInit {

  @Input() params: Params;
  
  constructor(private modalService: ModalService, private wordsService: WordsService) { }

  ngOnInit() {
  }

  close(){
    this.modalService.close();
    this.wordsService.startNextRound();

  }

}
