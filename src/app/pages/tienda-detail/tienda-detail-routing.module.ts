import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiendaDetailPage } from './tienda-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TiendaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiendaDetailPageRoutingModule {}
