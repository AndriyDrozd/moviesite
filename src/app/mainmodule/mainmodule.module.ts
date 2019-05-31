import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CustomersRoutingModule } from './main-routing.module';

import { TVService } from './TV.service';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    HeaderComponent, 
    NavbarComponent, 
    MaincontentComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    RouterModule,
    HttpClientModule
  ], exports: [
    HeaderComponent, 
    NavbarComponent, 
    MaincontentComponent,
    MainComponent
  ], 
  providers: [
    TVService
  ]
})
export class MainmoduleModule { }
