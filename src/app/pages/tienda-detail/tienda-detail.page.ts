import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda-detail',
  templateUrl: './tienda-detail.page.html',
  styleUrls: ['./tienda-detail.page.scss'],
})
export class TiendaDetailPage implements OnInit {

  public products: Array<any>;

  constructor() {
    this.products = [1, 2, 3, 4, 5, 6];
  }

  ngOnInit() {
  }

}
