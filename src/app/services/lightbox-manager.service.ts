import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IProjects } from '../interfaces/IProject.interface';

@Injectable({
  providedIn: 'root'
})
export class LightboxManagerService {

  private isVisibleLightBox = new BehaviorSubject<boolean>(false)
  private lightBoxData = new Subject<IProjects>();

  getObservableLightBox(): Observable<boolean> {
    return this.isVisibleLightBox.asObservable()
  }

  getObservableLightBoxData():Observable<IProjects> {
    return this.lightBoxData.asObservable()
  }

  setDataLightBox(data: IProjects) {
    this.lightBoxData.next(data)
  }

  appearLightBoxToggle() {
    const newValue = !this.isVisibleLightBox.value;
    this.isVisibleLightBox.next(newValue)
    console.log(this.isVisibleLightBox.value);
  }
}
