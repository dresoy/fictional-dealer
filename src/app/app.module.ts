import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { CookieDisclaimerComponent } from './cookie-disclaimer/cookie-disclaimer.component';
import { CookieService } from 'ngx-cookie-service';
import { BrandHomeComponent } from './brand-home/brand-home.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    LanguageSelectorComponent,
    FooterComponent,
    CookieDisclaimerComponent,
    BrandHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
