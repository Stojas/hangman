import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[onlyLetters]'
})
export class OnlyLettersDirective {

  constructor(private elRef: ElementRef) { }

  @HostListener('keypress', ['$event'])
  onEvent(event: KeyboardEvent) {
     if(!(/[a-zA-Z]/.test(event.key))){
      event.preventDefault();
    }  
  }
}
