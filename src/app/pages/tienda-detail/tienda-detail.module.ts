import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiendaDetailPageRoutingModule } from './tienda-detail-routing.module';

import { TiendaDetailPage } from './tienda-detail.page';
import { CardProductsComponent } from 'src/app/components/card-products/card-products.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiendaDetailPageRoutingModule
  ],
  declarations: [
    TiendaDetailPage,
    CardProductsComponent,
    HeaderComponent
  ]
})
export class TiendaDetailPageModule {}
