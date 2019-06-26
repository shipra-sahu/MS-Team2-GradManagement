import { NgModule, } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



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
