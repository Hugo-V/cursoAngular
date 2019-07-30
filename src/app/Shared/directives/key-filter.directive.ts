import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[filtroHoras]'
})
export class KeyFilterDirective {

  //@Input() filtroHoras: string;

  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    let e = event;
    //switch (this.filtroHoras) {
      //case "number":
        this.validateNumber(e);
        //break;
    //}
  }

  private validateNumber(e) {
    if (this.isCommonKey(e)) {
      return;
    }
    if (this.isNumber(e)) {
      e.preventDefault();
    }
  }

  private isNumber(e): boolean {
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      return true;
    }
    return false;
  }

  private isCommonKey(e) {
    if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
      //Allow: Ctrl+A
      (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
      //Allow: Ctrl+C
      (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
      //Allow: Ctrl+V
      (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
      //Allow: Ctrl+X
      (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
      //Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)) {
      //let it happen, don't do anything
      return true;
    }
    return false;
  }
}
