import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
//  services
import { IframeManagerService } from 'src/app/services/iframe-manager.service';

@Component({
  selector: 'app-iframe-demo',
  templateUrl: './iframe-demo.component.html'
})
export class IframeDemoComponent implements OnChanges {
  @Input() iframeUrl!: string;
  @Input() iframeTitle!: string;
  sanitizerUrl!: SafeResourceUrl;

  constructor(
    private iframeManagerSvc: IframeManagerService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnChanges(): void {
    this.sanitizerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeUrl)
  }

  iframeClose () {
    this.iframeManagerSvc.toggleIframeView()
  }
}
