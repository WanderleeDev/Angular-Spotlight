import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IframeManagerService {
  private isViewIframe = new BehaviorSubject<boolean>(false)
  private contentIframe = new BehaviorSubject<string>('')



  public getIframeView$ (): Observable<boolean> {
    return this.isViewIframe.asObservable()
  }

  public getContentIframe () {
    return this.contentIframe.getValue()
  }

  public updateIframeView (value: boolean) {
    this.isViewIframe.next(value)
  }

  public updateIframeContent (value: string) {
    this.contentIframe.next(value)
  }

  public toggleIframeView () {
    this.isViewIframe.next(!this.isViewIframe.value)
    console.log(this.isViewIframe.getValue());
  }
}
