import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { defineNumberPages } from '../../utils/defineNumberPages';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styles: `
  :host {
    display: contents;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent implements OnChanges {
  @Output() current = new EventEmitter<number>();
  @Input({ required: true }) numberPages: number = 1;
  @Input({ required: true }) cardPerView: number = 1;
  currentPage = 1;
  btns: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['numberPages']) return;

    this.numberPages = defineNumberPages(
      changes['numberPages'].currentValue,
      this.cardPerView
    );
    this.btns = Array.from({ length: this.numberPages }, (_, i) => i + 1);
    this.onChangePage(1);
  }

  public onChangePage(page: number): void {
    this.currentPage = page;
    this.current.emit(page);
  }
}
