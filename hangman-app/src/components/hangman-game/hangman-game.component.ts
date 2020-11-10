import { WordsService } from './../../services/words.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WordsControllerService } from 'src/services/words-controller.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

declare var Snap: any;
declare var mina: any;

@Component({
  selector: 'app-hangman-game',
  templateUrl: './hangman-game.component.html',
  styleUrls: ['./hangman-game.component.scss']
})
export class HangmanGameComponent implements OnInit, OnDestroy {

  $killer: Subject<any> = new Subject();
   
  snapSvg = null;
  head = null;
  body = null;
  rHand = null;
  lHand = null;
  rLeg = null;
  lLeg = null;
  constructor(private wordService: WordsService) {
  }

  ngOnInit() {
    this.snapSvg = Snap('#snap');
    this.initPerson();
    this.wordService.$faults.pipe(takeUntil(this.$killer)).subscribe(res => {
      this.showPart(res);
    })
    this.wordService.startNewGame();
  }

  initPerson() {
    this.head = this.snapSvg.circle(390, 100, 20);
    this.head.attr({
      fill: "transparent"
    });
    this.body = this.snapSvg.path('M388 118 L392 118 L392 200 L388 200 Z');
    this.body.attr({
      fill: "transparent"
    });
    this.rHand = this.snapSvg.path('M388 140 L388 144 L340 144 L340 140 Z');
    this.rHand.attr({
      fill: "transparent"
    });
    this.lHand = this.snapSvg.path('M392 140 L392 144 L440 144 L440 140 Z');
    this.lHand.attr({
      fill: "transparent"
    });
    this.rLeg = this.snapSvg.path('M388 200 L392 200 L370 270 L366 270 Z');
    this.rLeg.attr({
      fill: "transparent"
    });
    this.lLeg = this.snapSvg.path('M388 200 L392 200 L418 270 L414 270 Z');
    this.lLeg.attr({
      fill: "transparent"
    });
  }
  
  ngOnDestroy(){
    this.$killer.next();
    this.$killer.complete();
  }

  showPart(part: BODY_PARTS) {
    var tempPartObj = null;
    switch (part) {
      case BODY_PARTS.HEAD:
        tempPartObj = this.head;
        break;
      case BODY_PARTS.BODY:
        tempPartObj = this.body;
        break;
      case BODY_PARTS.RIGHT_HAND:
        tempPartObj = this.rHand;
        break;
      case BODY_PARTS.LEFT_HAND:
        tempPartObj = this.lHand;
        break;
      case BODY_PARTS.RIGHT_LEG:
        tempPartObj = this.rLeg;
        break;
      case BODY_PARTS.LEFT_LEG:
        tempPartObj = this.lLeg;
        break;
      default:
        this.clearPerson();
        break;
    }
    tempPartObj ? tempPartObj.attr({
      fill: "#42f598"
    }) : null;
  }

  clearPerson() {
    this.head.attr({
      fill: "transparent"
    })
    this.body.attr({
      fill: "transparent"
    })
    this.rHand.attr({
      fill: "transparent"
    })
    this.lHand.attr({
      fill: "transparent"
    })
    this.rLeg.attr({
      fill: "transparent"
    })
    this.lLeg.attr({
      fill: "transparent"
    })
  }
}

export enum BODY_PARTS {
  HEAD = 1,
  BODY = 2,
  RIGHT_HAND = 3,
  LEFT_HAND = 4,
  RIGHT_LEG = 5,
  LEFT_LEG = 6,
}