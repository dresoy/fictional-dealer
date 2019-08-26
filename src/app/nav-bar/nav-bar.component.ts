import { Component, OnInit, OnDestroy } from '@angular/core';
import { BrandsService } from '../services/brands.service';
import { IBrand } from '../ibrand';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tc-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {

  carBrands: IBrand[] = [];
  private brands$: Subscription;
  constructor(private brandService: BrandsService) { }

  ngOnInit() {
    this.getBrands();
  }

  ngOnDestroy(): void {
    this.brands$.unsubscribe();
  }

  private getBrands(): void {
    this.brands$ = this.brandService.GetBrands()
      .subscribe(
        response => this.brandsReponse(response),
        error => console.log(error)
      );
  }

  private brandsReponse(brands: IBrand[]): void {
    this.carBrands = brands;
    console.log('Brands loaded in Navbar');
  }

}
