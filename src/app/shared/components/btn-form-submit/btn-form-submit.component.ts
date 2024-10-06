import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-form-submit',
  templateUrl: './btn-form-submit.component.html',
})
export class BtnFormSubmitComponent {
  @Input({ required: true }) isSubmitting = false;
  @Input({ required: true }) isDisabled!: boolean | null;
}
