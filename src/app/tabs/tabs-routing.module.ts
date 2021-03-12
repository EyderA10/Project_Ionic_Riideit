import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'lo-mas-hot',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'categorias',
        loadChildren: () => import('../pages/categorias/categorias.module').then( m => m.CategoriasPageModule)
      },
      {
        path: 'promociones',
        loadChildren: () => import('../pages/promociones/promociones.module').then( m => m.PromocionesPageModule)
      },
      {
        path: 'categoria/:id',
        loadChildren: () => import('../pages/categoria-detail/categoria-detail.module').then( m => m.CategoriaDetailPageModule)
      },
      {
        path: 'tienda/:id',
        loadChildren: () => import('../pages/tienda-detail/tienda-detail.module').then( m => m.TiendaDetailPageModule)
      },
      {
        path: '',
        redirectTo: '/lo-mas-hot',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/lo-mas-hot',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
