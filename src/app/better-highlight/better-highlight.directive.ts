import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() customTextColor = '#212529';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') textColor: string;

  constructor(private elToChange: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.renderer.setStyle(this.elToChange.nativeElement, 'background-color', 'gray');
    this.textColor = this.customTextColor;
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
    this.textColor = this.customTextColor;
  }

  @HostListener('click') mouseClick(eventData: Event): void {
    this.backgroundColor = this.backgroundColor === 'red' ? 'gray' : 'red';
    this.textColor =
      this.textColor === this.customTextColor ? 'white' : '#212529';
  }
}
