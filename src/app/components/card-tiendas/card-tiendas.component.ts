import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-tiendas',
  templateUrl: './card-tiendas.component.html',
  styleUrls: ['./card-tiendas.component.scss'],
})
export class CardTiendasComponent implements OnInit {

  @Input() product: any;

  constructor() { }

  ngOnInit() {}

}
