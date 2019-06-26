import { NgModule, } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditComponent } from './gradmanagement/add-edit/add-edit.component';


const routes: Routes = [
  {
    path : 'grads',
    loadChildren: () => import('./gradmanagement/gradmanagement.module').then(mod => mod.GradmanagementModule),
  },
  {
    path : 'admin',
    loadChildren: () => import('./Admin/Admin.module').then(mod => mod.AdminModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
