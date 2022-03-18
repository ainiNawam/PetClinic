import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAppoinmentPageRoutingModule } from './edit-appoinment-routing.module';

import { EditAppoinmentPage } from './edit-appoinment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditAppoinmentPageRoutingModule
  ],
  declarations: [EditAppoinmentPage]
})
export class EditAppoinmentPageModule {}
