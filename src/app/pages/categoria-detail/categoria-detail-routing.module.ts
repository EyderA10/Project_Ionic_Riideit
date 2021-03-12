import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaDetailPage } from './categoria-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaDetailPageRoutingModule {}
