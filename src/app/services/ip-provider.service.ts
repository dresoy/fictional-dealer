import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { IIpData } from '../interfaces/iip-data';

@Injectable({
  providedIn: 'root'
})
export class IpProviderService {

  private currentIp: IIpData = null;

  constructor(private http: HttpClient) { }

  GetIp(): Observable<IIpData> {

    if (this.currentIp !== null) {
      return of(this.currentIp);
    }

    return this.http.get<IIpData>('https://api.ipify.org/?format=json')
      .pipe(
        tap((x: IIpData) => {
          this.currentIp = x;
          console.log('IP:', x.ip);
        })
      )
  }
}
