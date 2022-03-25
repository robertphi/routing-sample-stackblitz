import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleAComponent } from './module-a.component';

const routes: Routes = [
  {
    path: '',
    component: ModuleAComponent,
    data: {requireAdmin: false, skipLocationChange: false, enableTurboMode: true}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleARoutingModule { }
