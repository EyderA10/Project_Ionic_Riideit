import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-categories',
  templateUrl: './slide-categories.component.html',
  styleUrls: ['./slide-categories.component.scss'],
})
export class SlideCategoriesComponent implements OnInit {

  public categorias: Array<any>;
  public slideOpts: object;

  constructor() {
    this.categorias = [1, 2, 3, 4, 5];
    this.slideOpts = {
      slidesPerView: 2,
      initialSlide: 1,
      centeredSlides: true,
      spaceBetween: 5,
      speed: 400
    };
  }
  ngOnInit() {}

}
