import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  styleLiChild  = 'block py-2 pl-3 pr-4  rounded hover:bg-purple-600  md:px-4 md:py-1';
  activeLink = 0;
  isViewMenu = false;

  public setActiveLink(index: number) {
    this.activeLink = index;
  }

  public toggleMenu(): void {
    this.isViewMenu = !this.isViewMenu;
  }
}
