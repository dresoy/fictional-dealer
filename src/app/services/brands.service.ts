import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IBrand } from '../interfaces/ibrand';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private http: HttpClient) { }

  GetBrands(): Observable<IBrand[]> {
    return this.http.get<IBrand[]>('./assets/brands.json');
  }

  GetBrand(id: string): Observable<IBrand> {
    return this.GetBrands()
      .pipe(
        map((brand: IBrand[]) => brand.find(txn => txn.id === id))
      )
  }
}
