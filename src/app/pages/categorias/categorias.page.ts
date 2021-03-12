import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  public catgorias: Array<any>;

  constructor() {
    this.catgorias = [1, 2, 3, 4, 5];
  }

  ngOnInit() {
  }

}
