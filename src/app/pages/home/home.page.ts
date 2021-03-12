import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public tienda: string;
  public products: Array<any>;

  constructor() {
    this.products = [1, 2, 3, 4, 5];
    this.tienda = 'Panaderia';
  }

  ngOnInit() {
  }

}
