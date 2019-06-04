import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PaginatorComponent } from './paginator/paginator.component';



@NgModule({
  declarations: [
    PaginatorComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    PaginatorComponent
  ]
})

export class ShareModule { }
