import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { MainComponent } from './main.component';
import { CustomersRoutingModule } from './main-routing.module';

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
    RouterModule
  ], exports: [
    HeaderComponent, 
    NavbarComponent, 
    MaincontentComponent,
    MainComponent
  ]
})
export class MainmoduleModule { }
