import { Component, ViewChild, ElementRef, ViewChildren, QueryList, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  show = false;
  
  // view children to show that can listen to changes on child elements
  @ViewChildren('parent') children: QueryList<ElementRef>;

  @ViewChild("divelement1", { static: false }) 

  divelement1: ElementRef;
  divelement2: ElementRef;
  
  // @ViewChild('divelement1') 
  // set ele1(v: ElementRef) {
  //   console.log('set ele1', v);
  //   this.divelement1 = v;
  // }

  @ViewChild('divelement2')
  set ele2(v: ElementRef) {
    console.log('This element is set when ngIf is true', v);
    this.divelement2 = v;
  }

  @ViewChild('divelement3') divelement3: ElementRef;

  ngOnInit() {
    console.log('+++++ngOnInit++++++');
    console.log('divelement1', this.divelement1);
    console.log('divelement2', this.divelement2);
    console.log('divelement3', this.divelement3);

  }

  showIt() {
    this.show = true;
  }

  logElements() {
    console.log('divelement1', this.divelement1);
    console.log('divelement2', this.divelement2);
    console.log('divelement3', this.divelement3);
  }

   ngAfterViewInit() {
    console.log('--->ngAfterViewInit');
    console.log('divelement1', this.divelement1);
    console.log('divelement2', this.divelement2);
    console.log('divelement3', this.divelement3);
   
     this.children.changes.subscribe((comps: QueryList<ElementRef>) => {
      console.log('====>ngAfterViewInit.changes');
      console.log('divelement1', this.divelement1);
      console.log('divelement2', this.divelement2);
      console.log('divelement3', this.divelement3);
    });
  } 
}
