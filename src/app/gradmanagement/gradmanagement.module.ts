import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradmanagementRoutingModule } from './gradmanagement-routing.module';
import { AddEditComponent } from './add-edit/add-edit.component';

@NgModule({
  declarations: [AddEditComponent],
  imports: [
    CommonModule,
    GradmanagementRoutingModule
  ]
})
export class GradmanagementModule { }
