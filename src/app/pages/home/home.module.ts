import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular'

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HeaderComponent } from '../../components/header/header.component';
import { SliderFirstComponent } from '../../components/slider-first/slider-first.component';
import { SlideCategoriesComponent } from '../../components/slide-categories/slide-categories.component';
import { CardCategoriesComponent } from '../../components/card-categories/card-categories.component';
import { SlideProductsComponent } from '../../components/slide-products/slide-products.component';
import { CardProductsComponent } from '../../components/card-products/card-products.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperModule
  ],
  declarations: [
    HomePage,
    HeaderComponent,
    SliderFirstComponent,
    SlideCategoriesComponent,
    CardCategoriesComponent,
    SlideProductsComponent,
    CardProductsComponent
  ]
})
export class HomePageModule {}
