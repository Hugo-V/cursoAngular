import { Directive, TemplateRef, ViewContainerRef, Input, ViewRef, OnInit, OnChanges, Component, ViewChildren, ComponentFactory, Injector, ViewChild, ElementRef, Renderer2, ComponentFactoryResolver } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { identifierModuleUrl } from '@angular/compiler';

@Directive({
  selector: '[appLabelWarning]'
})
export class LabelWarningDirective implements OnInit,OnChanges {
    ngOnChanges(): void {
      if (this.appLabelWarning) {
        this.vcr.clear()
      } else {
        this.vcr.createEmbeddedView(this.templateRef);
        const cmpFactory = this.cfr.resolveComponentFactory(invalidoComponent);
        this.vcr.createComponent(cmpFactory);
      }
    }
  
  

  @Input() appLabelWarning: boolean;
  ngOnInit(): void {
    //this.view.createEmbeddedView(this.temp);
   
    //  const div = this.renderer.createElement('div');
    //  const text = this.renderer.createText('valido!');
    //this.renderer.appendChild(div, text);
    //this.renderer.appendChild(this.temp.elementRef.nativeElement, div);
    this.vcr.createEmbeddedView(this.templateRef);
    const cmpFactory = this.cfr.resolveComponentFactory(invalidoComponent);
    if (!this.appLabelWarning) {
      this.vcr.createComponent(cmpFactory);
    }
   
  }

  //

  constructor(private templateRef: TemplateRef<void>,
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver) { }

  //@Input() set appLabelWarning(condition: boolean)
  //{
  //  if (!condition) {
  //    this.viewContainer.createEmbeddedView(this.templateRef);
  //  } else {
  //    this.viewContainer.clear();
  //  }
  //}
}
@Component({
  selector: 'invalido',
  template: '<div #div>invalido</div>'
})
export class invalidoComponent {

}

