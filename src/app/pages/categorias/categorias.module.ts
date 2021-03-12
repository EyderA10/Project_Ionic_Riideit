import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriasPageRoutingModule } from './categorias-routing.module';

import { CategoriasPage } from './categorias.page';
import { HeaderComponent } from '../../components/header/header.component';
import { SliderFirstComponent } from '../../components/slider-first/slider-first.component';
import { CardCategoriesComponent } from '../../components/card-categories/card-categories.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriasPageRoutingModule
  ],
  declarations: [
    CategoriasPage,
    HeaderComponent,
    SliderFirstComponent,
    CardCategoriesComponent
  ]
})
export class CategoriasPageModule {}
