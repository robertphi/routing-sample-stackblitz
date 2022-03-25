import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleBComponent } from './module-b.component';

const routes: Routes = [
  {
    path: '',
    component: ModuleBComponent,
    data: {requireAdmin: true, skipLocationChange: true, enableTurboMode: true}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleBRoutingModule { }
