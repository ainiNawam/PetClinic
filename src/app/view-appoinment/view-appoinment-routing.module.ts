import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAppoinmentPage } from './view-appoinment.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAppoinmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAppoinmentPageRoutingModule {}
