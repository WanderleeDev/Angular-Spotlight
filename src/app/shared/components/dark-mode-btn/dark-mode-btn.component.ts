import { Component } from '@angular/core';

@Component({
  selector: 'app-dark-mode-btn',
  templateUrl: './dark-mode-btn.component.html',
})
export class DarkModeBtnComponent {
  isDarkMode = false;

  btnHandler() {
    this.isDarkMode = !this.isDarkMode
  }
}
