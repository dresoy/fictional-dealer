import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IBrand } from '../ibrand';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private http: HttpClient) { }

  GetBrands(): Observable<IBrand[]> {
    return this.http.get<IBrand[]>('./assets/brands.json');
  }
}
