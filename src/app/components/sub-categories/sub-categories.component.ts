import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss'],
})
export class SubCategoriesComponent implements OnInit {

  public slideOpts: object;
  public subCategories: Array<any>;

  constructor() {
    this.subCategories = [1, 2, 3, 4, 5, 6, 7];
    this.slideOpts = {
      slidesPerView: 2.5,
      spaceBetween: 5,
      breakproints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 15
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      }
    };
  }
  ngOnInit() { }

}
