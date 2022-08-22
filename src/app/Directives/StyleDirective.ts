import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[grey]'
})
export class StyleDirective implements OnInit{
    constructor(private element:ElementRef ,  private renderer:Renderer2){}

    ngOnInit(): void {
        this.renderer.setStyle(this.element.nativeElement, 'color', 'grey')
    }
}