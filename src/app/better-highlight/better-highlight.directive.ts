import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') textColor: string;

  constructor(private elToChange: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.renderer.setStyle(this.elToChange.nativeElement, 'background-color', 'gray');
    this.textColor = '#212529';
  }

  @HostListener('mouseenter') mouseOver(eventData: Event): void {
    //   this.renderer.setStyle(
    //     this.elToChange.nativeElement,
    //     'background-color',
    //     'gray'
    //   );
    this.backgroundColor = 'gray';
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event): void {
    this.backgroundColor = 'transparent';
    this.textColor = '#212529';
  }

  @HostListener('click') mouseClick(eventData: Event): void {
    this.backgroundColor = this.backgroundColor === 'red' ? 'gray' : 'red';
    this.textColor = this.textColor === '#212529' ? 'white' : '#212529';
  }
}
