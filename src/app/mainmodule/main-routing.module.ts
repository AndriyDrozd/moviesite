import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { MaincontentComponent } from './maincontent/maincontent.component';



const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {
        path: ':id',
        component: MaincontentComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }