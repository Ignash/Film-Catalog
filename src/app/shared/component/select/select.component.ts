import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'custom-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit, AfterViewInit {

  @Output() changeValue = new EventEmitter();
  @Input() selectListValue: Array<string>;
  selectedValue: string;
  showList: boolean = false;
  widthItem: string = 'auto';

  @ViewChild("list", {static: false})
  list: ElementRef;

  @HostListener('mouseleave',['$event']) onMouseleave(event){
    this.showList = false;
  }

  constructor( private refElem: ElementRef, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    if(this.selectListValue && this.selectListValue.length > 0) this.selectedValue = this.selectListValue[0]
  }

  ngAfterViewInit(){
    let width = 0;
    let listItems = document.querySelectorAll('.list-item');
    listItems.forEach((item: any)=>{
      if (item.offsetWidth > width) width = item.offsetWidth
    });
    this.widthItem = width + 40 + 'px';
    this.cdr.detectChanges();
  }

  changeValueSelect(event){
    this.selectedValue = event.target.value;
    this.changeValue.emit(event.target.value);
  }

  show(){
    this.showList = !this.showList;
  }

}
