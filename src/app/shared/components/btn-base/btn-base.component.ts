import { Component, Input } from '@angular/core';
import { BtnBase } from 'src/app/shared/interfaces/BtnBase.interface';

@Component({
  selector: 'app-btn-base',
  templateUrl: './btn-base.component.html',
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class BtnBaseComponent {
  @Input({ required: true }) btnConfig: BtnBase = {
    modifier: 'primary',
    text: 'Click',
    redirection: '#',
  };
  readonly btnPrimary = 'text-white bg-purple-800';
  readonly btnSecondary = 'text-purple-400 hover:scale-100 active:scale-100';
}
