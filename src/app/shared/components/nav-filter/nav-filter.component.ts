import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-nav-filter',
  templateUrl: './nav-filter.component.html',
  styles: [':host{ display: contents}']
})
export class NavFilterComponent   {
  @ViewChildren('btn') listBtn!:QueryList<ElementRef<HTMLButtonElement>>;
  @Input() filterProjectsHandler?: (param: string) => void;
  dataNav = [
    { icon: '🌐', name: 'All' },
    { icon: '⭐', name: 'Favorites' },
    { icon: '👥', name: 'Collaborative' }
  ];

  handleCLick (index: number, param: string) {
    if (!this.filterProjectsHandler) { return }
    this.listBtn.forEach((btn, i) => {
      btn.nativeElement.classList.toggle('bg-purple-600', i === index);
    });
    this.filterProjectsHandler(param);
  }
}
