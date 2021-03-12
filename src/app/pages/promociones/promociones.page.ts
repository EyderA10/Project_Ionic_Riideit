import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.page.html',
  styleUrls: ['./promociones.page.scss'],
})
export class PromocionesPage implements OnInit {

  public products: Array<any>;
  public slideOpts: object;

  constructor() {
    this.products = [1, 2, 3];
    this.slideOpts = {
      slidesPerView: 1.5,
      spaceBetween: 10,
      speed: 400
    };
  }
  ngOnInit() {
  }

}
