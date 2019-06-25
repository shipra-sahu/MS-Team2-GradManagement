import { NgModule, } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditComponent } from './gradmanagement/add-edit/add-edit.component';


const routes: Routes = [
  {
    path : 'add-edit',
    loadChildren: () => import('./gradmanagement/gradmanagement.module').then(mod => mod.GradmanagementModule),
  },
  
// {
//     path: '',
//     redirectTo: 'add-edit',
//     pathMatch: 'full'
//   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
