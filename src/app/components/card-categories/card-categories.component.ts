import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-categories',
  templateUrl: './card-categories.component.html',
  styleUrls: ['./card-categories.component.scss'],
})
export class CardCategoriesComponent implements OnInit {

  @Input() categoria: any;

  constructor() { }

  ngOnInit() {}

}
