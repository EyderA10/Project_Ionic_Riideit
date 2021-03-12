import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-slider-first',
  templateUrl: './slider-first.component.html',
  styleUrls: ['./slider-first.component.scss'],
})
export class SliderFirstComponent implements OnInit {


  public slideOpts: object;

  constructor() {
    this.slideOpts = {
      speed: 400
    };
  }

  ngOnInit() { }

}


