import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-form-submit',
  templateUrl: './btn-form-submit.component.html',
  styleUrls: ['./btn-form-submit.component.css']
})
export class BtnFormSubmitComponent {
  @Input() isDisabled!:boolean | null;
}
