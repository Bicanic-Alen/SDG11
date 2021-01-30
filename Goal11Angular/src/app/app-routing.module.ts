import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sgd111Component } from './sgd111/sgd111.component';
import { Sgd115Component } from './sgd115/sgd115.component';
import { Sgd116Component } from './sgd116/sgd116.component';
import { Sgd11bComponent } from './sgd11b/sgd11b.component';

const routes: Routes = [
  { path: 'sdg111', component: Sgd111Component,  data: {animation: 'sdg111'} },
  { path: 'sdg115', component: Sgd115Component,  data: {animation: 'sdg115'}},
  { path: 'sdg116', component: Sgd116Component,  data: {animation: 'sdg116'}},
  {path: 'sdg11b', component: Sgd11bComponent,  data: {animation: 'sdg11b'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
