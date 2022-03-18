import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditAppoinmentPage } from './edit-appoinment.page';

const routes: Routes = [
  {
    path: '',
    component: EditAppoinmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditAppoinmentPageRoutingModule {}
