import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ShowgradsComponent } from './showgrads/showgrads.component';
import { SearchByNamePipe } from './showgrads/search-by-name.pipe';
import { FormsModule } from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';


// import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [ShowgradsComponent, SearchByNamePipe],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatSortModule
    // AgGridModule.withComponents([ShowgradsComponent])
  ]
})
export class AdminModule { }
