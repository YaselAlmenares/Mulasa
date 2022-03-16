import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener, Input, NgModule, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {


  @HostBinding('style.backgroundColor') background = '';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
   }
  ngOnInit(): void {
    
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.background='#f3f3f3';
  }

  @HostListener('click') click(){console.log("RED")}

  @HostListener('mouseleave') mouseleave(eventData: Event){
   this.background='';
 }


}

@NgModule({
  declarations: [ HoverDirective ],
  exports: [ HoverDirective ]
})

export class HoverDirectiveModule {}
