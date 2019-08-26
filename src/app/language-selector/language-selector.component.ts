import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tc-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navigate(lang: string): void {
    window.location.assign(`/${lang}`);
  }

}
