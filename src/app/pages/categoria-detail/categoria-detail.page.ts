import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-detail',
  templateUrl: './categoria-detail.page.html',
  styleUrls: ['./categoria-detail.page.scss'],
})
export class CategoriaDetailPage implements OnInit {

  public products: Array<any>;
  public slideOpts: object;

  constructor() {
    this.products = [1, 2, 3, 4];
    this.slideOpts = {
      slidesPerView: 2,
      spaceBetween: 5,
      speed: 400
    }
  }

  ngOnInit() {
  }

}
