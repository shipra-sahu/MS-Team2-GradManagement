import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ShowgradsComponent } from './showgrads/showgrads.component';
import { SearchByNamePipe } from './showgrads/search-by-name.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShowgradsComponent, SearchByNamePipe],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
