import { Component, OnInit } from '@angular/core';
import { IpProviderService } from '../services/ip-provider.service';
import { CoockieManagerService } from '../services/coockie-manager.service';

@Component({
  selector: 'tc-cookie-disclaimer',
  templateUrl: './cookie-disclaimer.component.html',
  styleUrls: ['./cookie-disclaimer.component.css']
})
export class CookieDisclaimerComponent implements OnInit {

  ip: string;
  show: boolean;

  constructor(private ipProvider: IpProviderService,
    private cookieManager: CoockieManagerService) { }

  ngOnInit() {
    this.getPolicy();
  }

  private getIp() {
    this.ipProvider.GetIp().subscribe(response => {
      this.ip = response.ip;
      this.show = true;
    }, error => console.log(error));
  }

  close() {
    this.cookieManager.SetPolicy();
    this.show = false;
  }

  private getPolicy() {
    if (!this.cookieManager.HasPolicy()) {
      this.getIp();
    }
  }

}
