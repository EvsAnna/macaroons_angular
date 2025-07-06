import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[buttonBg]'
})
export class ButtonBgDirective implements OnInit {
  @Input('buttonBgDefaultColor') defaultBgColor: string = 'rgb(215, 72, 92)';
  @Input('buttonBgHoverColor') hoverBgColor: string = 'rgb(84,5,20)';

  @HostListener('mouseover')
  onMouseOver() {
    this.changeBgColor(this.hoverBgColor);
  }
  @HostListener('mouseout')
  onMouseOut() {
    this.changeBgColor(this.defaultBgColor);
  }

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.changeBgColor(this.defaultBgColor);
  }

  changeBgColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
