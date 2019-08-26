import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CoockieManagerService {

  private readonly cookieName = 'target-dealer-policy';

  constructor(private cookieService: CookieService) { }

  HasPolicy(): boolean {
    const hasit = this.cookieService.get(this.cookieName);
    return hasit === 'true';
  }

  SetPolicy(): void {
    let currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() + 1);
    this.cookieService.set(this.cookieName, 'true', currentDate, '/');
  }
}
