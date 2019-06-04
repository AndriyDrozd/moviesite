import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, AfterContentChecked {

  private arrayOfPages: Array<number> = [];

  @Input() currentPage: number;
  @Input() totalPages: number;

  
  @Output() onChangePage = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterContentChecked() {
    this.arrayOfPages = this.getPages();
    console.log(this.arrayOfPages);
  }

  changePage(kindOperation: string, currentPage?: number) {
    if(kindOperation === 'firstPage') {
      this.onChangePage.emit(1);
    } else if(kindOperation === 'previousPage') {
      this.onChangePage.emit(this.currentPage - 1);
    } else if(kindOperation === 'nextPage') {
      this.onChangePage.emit(this.currentPage + 1);
    } else if(kindOperation === 'lastPage') {
      this.onChangePage.emit(this.totalPages);
    } else {
      this.onChangePage.emit(currentPage);
    }
  }

  getPages() {
    let arr: Array<number> = [];

    if(this.totalPages < 8) {
      for(let i = 1; i < this.totalPages + 1; i++) {
          arr.push(i);
      }
    } else {
        if(this.currentPage < 5) {
          for(let i = 1; i < 8; i++) {
            arr.push(i);
          }
        } else {
          for(let i = this.currentPage; i < this.currentPage + 4; i++) {
            arr.push(i);
          }
  
          for(let i = this.currentPage; i > this.currentPage - 4; i--) {
            if(!arr.includes(i)) {
              arr.unshift(i);
            }
          }
        }
    }

    return arr;
  }
}
