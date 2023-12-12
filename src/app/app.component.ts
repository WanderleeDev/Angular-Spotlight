import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  template: '<router-outlet>',
  styles: [`:host {
    display: block;
    min-height: 100dvh;
  }`]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
}
