import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlowbiteService {
  constructor(@Inject(PLATFORM_ID) private platformID: never) {}

  public loadFlowbite() {
    if (isPlatformBrowser(this.platformID)) {
      import('flowbite');
    }
  }
}
