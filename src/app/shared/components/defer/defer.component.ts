import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-defer',
  templateUrl: './defer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeferComponent {
  @Input({ required: true }) deferId?: string;
}
