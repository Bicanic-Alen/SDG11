import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sgd111Component } from './sgd111/sgd111.component';
import { Sgd115Component } from './sgd115/sgd115.component';
import { Sgd116Component } from './sgd116/sgd116.component';
import { Sgd11bComponent } from './sgd11b/sgd11b.component';

const routes: Routes = [
  { path: 'sdg111', component: Sgd111Component },
  { path: 'sdg115', component: Sgd115Component},
  { path: 'sdg116', component: Sgd116Component},
  {path: 'sdg11b', component: Sgd11bComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
