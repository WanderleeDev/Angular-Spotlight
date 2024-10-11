import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-empty-project',
  templateUrl: './empty-project.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyProjectComponent { }
