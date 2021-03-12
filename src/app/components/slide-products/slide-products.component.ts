import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-products',
  templateUrl: './slide-products.component.html',
  styleUrls: ['./slide-products.component.scss'],
})
export class SlideProductsComponent implements OnInit {

  @Input() tienda = 'Restaurante';
  @Input() products: Array<any>;
  public slideOpts: object;

  constructor() {
    this.slideOpts = {
      slidesPerView: 1.5,
      spaceBetween: 10,
      speed: 400
    };
  }

  ngOnInit() {}

}
