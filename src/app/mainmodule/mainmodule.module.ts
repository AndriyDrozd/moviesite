import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { CustomersRoutingModule } from './main-routing.module';

import { TVService } from './TV.service';
import { reducer } from './reducers/param-data.reducer'

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { MainComponent } from './main.component';
import { ShareModule } from '../share/share.module';
import { MoreinformationComponent } from './moreinformation/moreinformation.component';

@NgModule({
  declarations: [
    HeaderComponent, 
    NavbarComponent, 
    MaincontentComponent,
    MainComponent,
    MoreinformationComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    RouterModule,
    HttpClientModule,
    ShareModule,
    StoreModule.forRoot({
      filmInfo: reducer
    })
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
