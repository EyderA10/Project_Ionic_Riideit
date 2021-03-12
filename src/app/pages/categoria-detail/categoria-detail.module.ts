import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaDetailPageRoutingModule } from './categoria-detail-routing.module';

import { CategoriaDetailPage } from './categoria-detail.page';
import { HeaderComponent } from './../../components/header/header.component';
import { SubCategoriesComponent } from 'src/app/components/sub-categories/sub-categories.component';
import { CardTiendasComponent } from 'src/app/components/card-tiendas/card-tiendas.component';
import { SliderFirstComponent } from 'src/app/components/slider-first/slider-first.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaDetailPageRoutingModule
  ],
  declarations: [
    CategoriaDetailPage,
    HeaderComponent,
    SubCategoriesComponent,
    CardTiendasComponent,
    SliderFirstComponent
  ]
})
export class CategoriaDetailPageModule {}
