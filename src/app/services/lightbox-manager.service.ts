import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LightboxManagerService {

  private isVisibleLightBox = new BehaviorSubject<boolean>(false)

  getObservableLightBox(): Observable<boolean> {
    return this.isVisibleLightBox.asObservable()
  }

  appearLightBoxToggle() {
    const newValue = !this.isVisibleLightBox.value;
    this.isVisibleLightBox.next(newValue)
    console.log(this.isVisibleLightBox.value);
  }
}
