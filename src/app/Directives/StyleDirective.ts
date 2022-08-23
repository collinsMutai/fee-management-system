import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[grey]',
})
export class StyleDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  @Input() color: string = '';
  @HostBinding('style.color') colorgrey!: string;

  @Input() textDecoration: string = '';
  @HostBinding('style.textDecoration') decoration!: string;

  @Input() display: string = '';
  @HostBinding('style.display') displayFlex!: string;

  @Input() gap: string = '';
  @HostBinding('style.gap') addGap!: string;

  @Input() textTransform: string = '';
  @HostBinding('style.textTransform') addTextTransform!: string;

  @Input() backgroundColor: string = '';
  @HostBinding('style.backgroundColor') addbackgroundColor!: string;

  @Input() justifyContent: string = '';
  @HostBinding('style.justifyContent') addjustifyContent!: string;

  @Input() padding: string = '';
  @HostBinding('style.padding') addpadding!: string;

  @Input() fontSize: string = '';
  @HostBinding('style.fontSize') addfontSize!: string;

  @Input() fontWeight: string = '';
  @HostBinding('style.fontWeight') addfontWeight!: string;

  ngOnInit(): void {
    this.colorgrey = this.color;
    this.decoration = this.textDecoration;
    this.displayFlex = this.display;
    this.addGap = this.gap;
    this.addpadding = this.padding;
    this.addTextTransform = this.textTransform;
    this.addbackgroundColor = this.backgroundColor;
    this.addjustifyContent = this.justifyContent;
    this.addfontSize = this.fontSize;
  }
}
