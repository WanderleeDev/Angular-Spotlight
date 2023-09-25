import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
initFlowbite

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'EntryPageAngular';

  ngOnInit(): void {
    initFlowbite();
  }
}
