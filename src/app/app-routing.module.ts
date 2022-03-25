import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    data: {requireAdmin: false, skipLocationChange: false, enableTurboMode: false}
  },
  {
    path: 'ModuleA',
    loadChildren: () => import('./module-a/module-a.module').then(m => m.ModuleAModule)
  },
  {
    path: 'ModuleB',
    loadChildren: () => import('./module-b/module-b.module').then(m => m.ModuleBModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
