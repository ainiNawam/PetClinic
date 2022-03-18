import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAppoinmentPageRoutingModule } from './view-appoinment-routing.module';

import { ViewAppoinmentPage } from './view-appoinment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAppoinmentPageRoutingModule
  ],
  declarations: [ViewAppoinmentPage]
})
export class ViewAppoinmentPageModule {}
