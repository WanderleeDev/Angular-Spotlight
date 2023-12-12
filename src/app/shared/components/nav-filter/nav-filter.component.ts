import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-nav-filter',
  templateUrl: './nav-filter.component.html',
  styles: ['host:{ display: contents}']
})
export class NavFilterComponent implements AfterViewInit {
  @ViewChildren('btn') listBtn!:QueryList<ElementRef<HTMLButtonElement>>;
  @ViewChild('nav') nav!:ElementRef<HTMLUListElement>;
  dataNav = [
    { icon: '🌐', name: 'All' },
    { icon: '⭐', name: 'Favorites' },
    { icon: '👥', name: 'Collaborative' }
  ];

  ngAfterViewInit (): void {
    const listBtn = this.nav.nativeElement.querySelectorAll('button');
    const btnHandler = (e: Event): void => {
      listBtn.forEach(btn => { btn.classList.remove('bg-purple-600') });
      e.target instanceof HTMLButtonElement && e.target.classList.add('bg-purple-600')
    }

    listBtn[0].classList.add('bg-purple-600');
    this.nav.nativeElement.addEventListener('click', (e: MouseEvent) => btnHandler(e))
  }
}
