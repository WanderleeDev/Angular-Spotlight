import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-btn-form-submit',
  templateUrl: './btn-form-submit.component.html',
})
export class BtnFormSubmitComponent implements OnChanges {
  @Input({ required: true }) isSubmitting = false;
  @Input({ required: true }) isDisabled!: boolean | null;
  label: string = $localize`Send message`;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isSubmitting']) {
      this.label = changes['isSubmitting'].currentValue
        ? $localize`Sending...`
        : $localize`Send message`;
    }
  }
}
