import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() currentPage: number;
  @Input() totalPages: number;

  @Output() goPrev = new EventEmitter<boolean>();
  @Output() goNext = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    
  }

  onPrev() {
    this.goPrev.emit(true);
  }

  onNext() {
    this.goNext.emit(true);
  }

}
