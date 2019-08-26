import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandsService } from '../services/brands.service';
import { IBrand } from '../interfaces/ibrand';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'tc-brand-home',
  templateUrl: './brand-home.component.html',
  styleUrls: ['./brand-home.component.css']
})
export class BrandHomeComponent implements OnInit {

  carBrand: IBrand;

  constructor(private activatedRoute: ActivatedRoute,
    private brandsService: BrandsService) { }

  ngOnInit() {
    this.GetRoute();
  }

  private GetRoute() {
    this.activatedRoute.paramMap
      .subscribe(param => {
        let id = param.get('id');
        if (!isNullOrUndefined(id)) {
          id = id.trim();
          this.getBrand(id);
        } else {
          this.carBrand = {
            id: null,
            headline: 'Welcome to Target Cars LTD',
            subline: 'We sell the fastest cars on the planet.'
          }
        }
      });
  }

  private getBrand(id: string) {
    this.brandsService.GetBrand(id)
      .subscribe(response => {
        this.carBrand = response;
      });
  }

}
