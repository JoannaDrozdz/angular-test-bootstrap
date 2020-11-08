import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elToChange: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.renderer.setStyle(this.elToChange.nativeElement, 'background-color', 'gray');
  }

  @HostListener('mouseenter') mouseOver(eventData: Event): void {
    this.renderer.setStyle(
      this.elToChange.nativeElement,
      'background-color',
      'gray'
    );
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event): void {
    this.renderer.setStyle(
      this.elToChange.nativeElement,
      'background-color',
      'transparent'
    );
  }
}
