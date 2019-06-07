import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { MoreinformationComponent } from './moreinformation/moreinformation.component';



const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {
        path: ':id',
        component: MaincontentComponent
      },
      {
        path: ':id/:id',
        component: MoreinformationComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }