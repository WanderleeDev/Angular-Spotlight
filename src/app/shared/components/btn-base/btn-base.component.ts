import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-base',
  templateUrl: './btn-base.component.html',
  styles: [`host: { display: contents; }`]
})
export class BtnBaseComponent {
  @Input({required: true})btnModifier: 'primary' | 'secondary' = 'primary';
  @Input ({required: true}) btnText = 'Click';
  readonly btnPrimary = 'text-white bg-purple-800';
  readonly btnSecondary = 'text-purple-400 disabled:pointer-events-none hover:scale-100 active:scale-100 cursor-not-allowed';
}
