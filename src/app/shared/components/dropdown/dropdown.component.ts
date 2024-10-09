import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styles: `
  :host {
    display: contents;
  }
  `,
})
export class DropdownComponent {
  currentLanguage = 'en';
}
