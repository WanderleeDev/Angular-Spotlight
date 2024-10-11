import { afterRender, Component } from '@angular/core';

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
  flag = 'assets/svg/en.svg';
  languageCode = 'en-US';
  defaultLanguage = $localize `English`;

  languages = [
    { name: $localize `English`, code: 'en-US', icon: 'assets/svg/en.svg' },
    { name: $localize `Español`, code: 'es', icon: 'assets/svg/es.svg' },
  ];

  constructor() {
    afterRender(() => {
      const languages = location.pathname.split('/').filter(p => p)
      if (languages.length <= 0) return

      const newLanguage = this.languages.find(l => l.code === languages[0])

      if (!newLanguage) return

      this.flag = newLanguage.icon
      this.defaultLanguage = newLanguage.name
    });
  }
}
