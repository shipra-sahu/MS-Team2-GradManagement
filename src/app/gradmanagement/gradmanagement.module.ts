import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradmanagementRoutingModule } from './gradmanagement-routing.module';
import { AddEditComponent } from './add-edit/add-edit.component';
import { GradDetailsComponent } from './grad-details/grad-details.component';

@NgModule({
  declarations: [AddEditComponent, GradDetailsComponent],
  imports: [
    CommonModule,
    GradmanagementRoutingModule
  ]
})
export class GradmanagementModule { }
