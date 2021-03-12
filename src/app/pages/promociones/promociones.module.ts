import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromocionesPageRoutingModule } from './promociones-routing.module';

import { PromocionesPage } from './promociones.page';
import { CardProductsComponent } from 'src/app/components/card-products/card-products.component';
import { HeaderComponent } from './../../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromocionesPageRoutingModule
  ],
  declarations: [
    PromocionesPage,
    HeaderComponent,
    CardProductsComponent
  ]
})
export class PromocionesPageModule {}
