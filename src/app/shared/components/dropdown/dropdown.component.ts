import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styles: `
  :host {
    display: contents;
  }
  `,
})
export class DropdownComponent implements OnInit {
  currentLanguage = 'en';

  ngOnInit(): void {
    const params =new URL(window.location.href).pathname
    console.log(params);

  }
}
